import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório..." />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#">
          <img
            src="https://avatars1.githubusercontent.com/u/29265857?s=460&u=439da134e6b1a4766dbba464f048a21cf2036f3e&v=4"
            alt="User"
          />
          <div>
            <strong>react-native-animations</strong>
            <p>A bunch of examples on how to create awesome animations</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="#">
          <img
            src="https://avatars1.githubusercontent.com/u/29265857?s=460&u=439da134e6b1a4766dbba464f048a21cf2036f3e&v=4"
            alt="User"
          />
          <div>
            <strong>react-native-animations</strong>
            <p>A bunch of examples on how to create awesome animations</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="#">
          <img
            src="https://avatars1.githubusercontent.com/u/29265857?s=460&u=439da134e6b1a4766dbba464f048a21cf2036f3e&v=4"
            alt="User"
          />
          <div>
            <strong>react-native-animations</strong>
            <p>A bunch of examples on how to create awesome animations</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
