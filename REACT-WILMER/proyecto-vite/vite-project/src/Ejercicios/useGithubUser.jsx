import useSWR from 'swr';

const fetchGithubUser = (username) => {
  return fetch(`https://api.github.com/users/${username}`).then((res) =>
    res.json()
  );
};

const useGithubUser = (username) => {
  const { data: user, error } = useSWR(username, fetchGithubUser);

  return {
    user,
    error,
    loading: !user && !error,
  };
};

export default useGithubUser;
