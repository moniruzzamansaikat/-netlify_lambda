const fetchUsers = async () => {
  const res = await fetch('/.netlify/functions/getusers')
  const data = await res.json()
  return data
}

fetchUsers().then((data) => {
  const usersList = document.querySelector('#users')

  data.forEach((user) => {
    const li = document.createElement('li')
    li.className = 'list-group-item'

    const link = document.createElement('a')
    link.appendChild(document.createTextNode(user.login))
    link.href = user.html_url
    link.target = '_blank'
    li.appendChild(link)
    usersList.appendChild(li)
  })
})
