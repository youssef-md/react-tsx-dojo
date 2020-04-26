import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepoInfo, Issues } from './styles';
import logo from '../../assets/logo.svg';

interface RepositoryParams {
  repo: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepoInfo>
        <header>
          <img src="https://avatars1.githubusercontent.com/u/29265857?v=4" />
          <div>
            <strong>youssef-md/tindev</strong>
            <p>Descrição do repositórioooo</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1800</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepoInfo>

      <Issues>
        <Link to="#aasd">
          <div>
            <strong>repo.full_name</strong>
            <p>repo.description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
        <Link to="#aasd">
          <div>
            <strong>repo.full_name</strong>
            <p>repo.description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
        <Link to="#aasd">
          <div>
            <strong>repo.full_name</strong>
            <p>repo.description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
        <Link to="#aasd">
          <div>
            <strong>repo.full_name</strong>
            <p>repo.description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
