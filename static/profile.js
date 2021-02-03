
function submitProfile(evt) {
  evt.preventDefault();

  const formData = {
    name: $('#name-field').val(),
    age: $('#age-field').val(),
    occupation: $('#occupation-field').val(),
    salary: $('#salary-field').val(),
    education: $('#education-field').val(),
    state: $('#state-field').val(),
    city: $('#city-field').val(),
    garden: $('#garden-field').val(),
    tv: $('#tv-field').val()
  };

  $.post('/api/profile', formData, (response) => {
    $('#profile').append(`
      <li>${response.fullname} the ${response.occupation} is ${response.age}
      with salary range ${response.salary}
      with education level ${response.education} 
      in state ${response.state} 
      with city type ${response.city} 
      with garden answer ${response.garden} 
      with tv hours ${response.tv}</li>
    `);
  });
}

$("#profile-form").on('submit', submitProfile);