import { useParams } from 'react-router-dom';

import Actor from 'components/credits/Actor';

const invariant = (id?: string) => {
  if (!id) {
    throw new Error('Director id is undefined');
  }

  if (!Number.isInteger(parseInt(id))) {
    throw new Error('Director id is not an integer');
  }
};

const ActorPage = () => {
  const { id } = useParams<'id'>();

  // We could redirect the user to home
  invariant(id);

  return <Actor id={parseInt(id!)} />;
};

export default ActorPage;
