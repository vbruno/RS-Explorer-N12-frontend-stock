import { FiUser, FiLogOut } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import { Container, User } from './styles';

export function Header() {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <h1>Menu</h1>

      <aside>
        <User>
          <span>
            Olá,
            {' '}
            <strong>{user.name.replace(/^./, user.name[0].toUpperCase())}</strong>
          </span>
          <small>
            <FiUser />
            {' '}
            Perfil de
            {' '}
            {user.role.replace(/^./, user.role[0].toUpperCase())}
          </small>
        </User>
      </aside>

      <button type="button" onClick={signOut} aria-label="signOut">
        <FiLogOut size={24} />
      </button>
    </Container>
  );
}
