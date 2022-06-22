import EmptyPoster from 'components/common/EmptyPoster';
import Poster from 'components/common/Poster';

export type MoviePosterProps = {
  id: number;
  metadata: {
    posterUrl?: string;
  };
};

const MovieReviewPoster = ({ metadata }: MoviePosterProps) => {
  return (
    <div>
      {metadata?.posterUrl ? (
        <Poster posterUrl={metadata.posterUrl} width={'100px'} height={'auto'} />
      ) : (
        <EmptyPoster width={'100px'} height={'150px'} iconSize={'50px'} />
      )}
    </div>
  );
};

export default MovieReviewPoster;
