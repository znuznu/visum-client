import { useParams } from 'react-router-dom';

import Director from 'components/Director';

const invariant = (id?: string) => {
  if (!id) {
    throw new Error('Director id is undefined');
  }

  if (!Number.isInteger(parseInt(id))) {
    throw new Error('Director id is not an integer');
  }
};

const DirectorPage = () => {
  const { id } = useParams<'id'>();

  // We could redirect the user to home
  invariant(id);

  return <Director id={parseInt(id!)} />;
};

export default DirectorPage;
