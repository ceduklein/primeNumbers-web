/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai';

import './styles.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand nav-title">Números Primos</a>
      <div className="row nav-autor" style={{marginRight: '50px'}}>
        <a className="navbar-brand">Victor Gevaerd Luiz</a>
        <a href="https://github.com/">
          <AiOutlineGithub color="#fff" size={40}/>
        </a>
        <a href="https://br.linkedin.com/">
          <AiOutlineLinkedin color="#fff" size={40}/>
        </a>
      </div>
    </nav>
  )
}

export default NavBar;
