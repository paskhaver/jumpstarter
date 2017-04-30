export const fetchProfilePicture = () => {
  return $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
  });
};
