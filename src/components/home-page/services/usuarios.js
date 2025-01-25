//const BASE_URL = 'http://127.0.0.1:3000'
const BASE_URL = 'https://sist-tanques.onrender.com'


export const fetchUsuarios = async () => {
  console.log(`bearer ${localStorage.getItem("JWT_TOKEN")}`)
  const options = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Authorization': `bearer ${localStorage.getItem("JWT_TOKEN").replace(/['"]+/g, '')}`
    },

  }

  const response = await fetch(`${BASE_URL}/listausuarios`,options)

  return await response.json()
}

export const fetchUsuario = async (id1) => {
  
  const options = {
    method: 'POST',
   
    headers: {
            'Content-type': 'application/json',
            'Authorization': `bearer ${localStorage.getItem("JWT_TOKEN").replace(/['"]+/g, '')}`
    },
    body: JSON.stringify({id:id1}),
    

  }

  const response = await fetch(`${BASE_URL}/usuarioid`, options)
  
  console.log(response.content)

  return await response.json()
}


 export const fetchLogin = async (username,password) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({email:username,password:password})
  }

  const response = await fetch(`${BASE_URL}/login`, options)
  
  return await response.json()
}

export const editUsuarios = async (id,form) => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
       'Authorization': `bearer ${localStorage.getItem("JWT_TOKEN").replace(/['"]+/g, '')}`

    },
    body: JSON.stringify({id:id,user:form})
  }
  console.log(options)
  const response = await fetch(`${BASE_URL}/actualizar-usuario`, options)
  
  return await response.json()
}


export const createUsuarios = async (form) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
       'Authorization': `bearer ${localStorage.getItem("JWT_TOKEN").replace(/['"]+/g, '')}`

    },
    body: JSON.stringify({user:form})
  }
  console.log(options)
  const response = await fetch(`${BASE_URL}/registro`, options)
  
  return await response.json()
}

export const removeUsuarios = async (id1) => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
       'Authorization': `bearer ${localStorage.getItem("JWT_TOKEN").replace(/['"]+/g, '')}`

    },
    body: JSON.stringify({id:id1})
  }
  console.log(options)
  const response = await fetch(`${BASE_URL}/delusuario`, options)
  
  return await response.json()
}

export const correoUsuarios = async(email) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
       'Authorization': `bearer ${localStorage.getItem("JWT_TOKEN").replace(/['"]+/g, '')}`

    },
    body: JSON.stringify({email:email})
  }
  console.log(options)
  const response = await fetch(`${BASE_URL}/sendemail`, options)
  
  return await response.json()
}

export const cambiarClaveUsuarios = async(token,form) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
     

    },
    body: JSON.stringify({form:form})
  }
  console.log(options)
  const response = await fetch(`${BASE_URL}/resetclave/${token}`, options)
  
  return await response.json()
}