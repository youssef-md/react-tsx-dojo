import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

interface Repo {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repos, setRepos] = useState<Repo[]>([]);

  async function handleAddRepo(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get<Repo>(`repos/${newRepo}`);
    const repo = response.data;

    setRepos([...repos, repo]);
    setNewRepo('');
  }

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form onSubmit={handleAddRepo}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório..."
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repos.map((repo) => (
          <a key={repo.full_name} href="#">
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
