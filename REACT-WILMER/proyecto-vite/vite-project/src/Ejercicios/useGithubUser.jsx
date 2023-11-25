import useSWR from 'swr';

const fetchGithubUser = (username) => {
  if (username) {
    return fetch(`https://api.github.com/users/${username}`).then((res) =>
      res.json()
    );
  }
  return null;
};

const useGithubUser = (username) => {
  const { data: user, error, revalidate } = useSWR(username, fetchGithubUser);

  const reloadUser = () => {
    revalidate(); 
  };

  return {
    user,
    error,
    loading: !user && !error,
    reloadUser,
  };
};

export default useGithubUser;
