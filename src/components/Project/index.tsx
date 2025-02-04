import {
  Project as ProjectWrapper,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks
} from './style';

import { Text } from '@/styles/Text';
import { useEffect, useState } from 'react';
import { FaGithub, FaShare } from 'react-icons/fa';
import { userData } from '@/utils/userData';
import React from 'react';

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
  updated_at: String;
}

export const Project = (): React.JSX.Element => {
  const [repositories, setRepositories] = useState<ReposType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: Response = await fetch(
        `https://api.github.com/users/${userData.githubUser}/repos?sort=updated`
      );

      const json = await data.json();

      setRepositories(json);

      if (!data.ok) {
        throw data;
      }

      return json;
    };
    fetchData();
  }, []);

  console.log(repositories.map((r) => r.updated_at));

  return (
    <>
      {repositories?.map((repository) => (
        <ProjectWrapper key={repository.id}>
          <Text as='h2' type='heading3' color='brand4'>
            {repository.name}
          </Text>

          {repository.language && (
            <ProjectStack>
              <Text color='grey3' type='body2'>
                Linguagem:
              </Text>
              <ProjectStackTech>
                <Text color='brand1' type='body2'>
                  {repository.language}
                </Text>
              </ProjectStackTech>
            </ProjectStack>
          )}

          <Text type='body1' color='grey3'>
            {repository.description}
          </Text>
          <ProjectLinks>
            <ProjectLink target='_blank' href={repository.html_url}>
              <FaGithub /> Github Code
            </ProjectLink>
            {repository.homepage && (
              <ProjectLink target='_blank' href={repository.homepage}>
                <FaShare /> Aplicação
              </ProjectLink>
            )}
          </ProjectLinks>
          <Text color='brand3' type='body2'>
            {`Última atualização: ${repository.updated_at.slice(
              8,
              10
            )}/${repository.updated_at.slice(
              5,
              7
            )}/${repository.updated_at.slice(0, 4)}`}
          </Text>
        </ProjectWrapper>
      ))}
    </>
  );
};
