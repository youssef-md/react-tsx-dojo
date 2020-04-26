import React from 'react';
import { useRouteMatch } from 'react-router-dom';

// import { Container } from './styles';
interface RepositoryParams {
  repo: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return <h1>{params.repo}</h1>;
};

export default Repository;
