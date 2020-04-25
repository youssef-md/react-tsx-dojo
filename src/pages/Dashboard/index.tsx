import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import { Title, Form, Repositories, Error } from './styles';

interface Repo {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [newRepo, setNewRepo] = useState('');

  const [repos, setRepos] = useState<Repo[]>(() => {
    const storedRepos = localStorage.getItem('@github-explorer:repos');
    if (storedRepos) return JSON.parse(storedRepos);
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@github-explorer:repos', JSON.stringify(repos));
  }, [repos]);

  async function handleAddRepo(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Repo>(`repos/${newRepo}`);
      const repo = response.data;

      setRepos([...repos, repo]);
      setNewRepo('');
      setInputError('');
    } catch {
      setInputError('Erro na busca por este repositório');
    }
  }

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form onSubmit={handleAddRepo} hasError={!!inputError}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório..."
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

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
