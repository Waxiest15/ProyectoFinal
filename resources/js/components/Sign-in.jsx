import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import {useState} from 'react';
import axios from 'axios';
// const [users, setUsers]=useState([])



function Signin() {
  
  function getToday(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var dateTime = date;

    var hoy = document.getElementById('birthDate');
    
    hoy.max=date;
  }

  function confirmPassword() {
    let pssw;
    let psswC;

    pssw=document.getElementById('password').value;
    psswC=document.getElementById('confirmPassword').value;

    console.log('password: ', pssw);
    console.log('password Confirm: ', psswC);

    if(pssw!=psswC){
      document.getElementById('btn_submit').disabled=true;
      console.log('No son iguales')
    }else{
      document.getElementById('btn_submit').disabled=false;
    }
  }

  // function getGender(){
  //   var ele = document.getElementsByName('gender');
  //   for(i = 0; i < ele.length; i++) {
  //       if(ele[i].checked)
        
  //   }
  // }

  // const [name, setName] = useState('')
  // const [last_name, setlast_name] = useState('')
  // const [last_name2, setlast_name2] = useState('')
  // const [birth, setBirth] = useState('')
  // const [gender, setGender] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  const [formValue, setFormValue] = useState({
    name: '',
    last_name: '',
    last_name2: '',
    birth: '',
    gender: '',
    email: '',
    password: '',
    //image: null
  })

  const [users, setUsers] = useState(['']);

  function handleChange(e){
    if(e.target.checked){
      setFormValue.gender = e.value;
    }
    
      
  }

  const onChange = (e) => {
    e.persist();
    setFormValue({...formValue, [e.target.name]: e.target.value})
    /*concatena al formValue,    email         lo que escriba el usuario como email */
  }

  const handleFileChange = (e) => setForm({...formValue, [e.target.name]: e.target.files[0]})

  const postData = async(e) => {
    if (e && e.preventDefault()) e.preventDefault(); e.preventDefault();
    const formData = new FormData();
    formData.append("name", formValue.name)
    formData.append("last_name", formValue.last_name)
    formData.append("last_name2", formValue.last_name2)
    formData.append("birth", formValue.birth)
    formData.append("gender", formValue.gender)
    formData.append("email", formValue.email)
    formData.append("password", formValue.password)
    //formData.append("image", formValue.image)
    await axios.post('http://localhost:80/ProyectoFinal/public/api/user_store',
    formData,
    {headers: {'Content-Type': 'multipart/form-data',
    'Accept':'application/json'}}
    ).then(response => {
        if(response.status==200){
            console.log('response');
            setUsers(response.data);
            

        }
    }) .catch(error =>{
        console.log(error);
    })
  }

  return (
    <Container className="w-50">
        <Card className="m-3 p-3">
          <Card.Header className="text-center">
            <h1>Registro</h1>
          </Card.Header>
        <Form onSubmit={postData}>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre(s)</Form.Label>
            <Form.Control
            name="name"
            type="text"
            maxLength={"100"}
            pattern="[A-Za-z]{1,100}" 
            placeholder="Escribe tu nombre(s)"
            required
            value={formValue.name} 
            onChange={onChange}
            />
        </Form.Group>
        <Row>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicLastNames">
            <Form.Label>Apellido paterno</Form.Label>
            <Form.Control
            name="last_name"
            type="text"
            placeholder="Apellido paterno"
            maxLength={"100"}
            pattern="[A-Za-z]{1,100}" 
            required
            value={formValue.last_name} 
            onChange={onChange}
            />
        </Form.Group>  
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicLastNames">
            <Form.Label>Apellido Materno</Form.Label>
            <Form.Control
            name="last_name2"
            type="text"
            placeholder="Apellido materno"
            maxLength={"100"}
            pattern="[A-Za-z]{1,100}" 
            required
            value={formValue.last_name2} 
            onChange={onChange}
            />
        </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="birthDate">
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control
            onSelect={getToday}
            name="birth"
            type="date" 
            required
            value={formValue.birth} 
            onChange={onChange}
            />
        </Form.Group>

        <Form.Group controlId="gender">
        <Form.Label>Genero</Form.Label>
          <Form.Check
                name='genderCheck'
                value="Male"
                type="radio"
                aria-label="radio 1"
                label="Hombre"
                checked={value}
                onChange={handleChange}
            />
            <Form.Check
                name='genderCheck'
                value="Female"
                type="radio"
                aria-label="radio 2"
                label="Mujer"
                onChange={handleChange}
                />
            <Form.Check
                name='genderCheck'
                value="Other"
                type="radio"
                aria-label="radio 2"
                label="Otro"
                onChange={handleChange}
                />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electronico</Form.Label>
        <Form.Control
        title='Solo se aceptan caracteres alfabeticos [a-z] especiales (%?+- etc), debe tener el formato example@extension.algo[.algo]'
        name='email'
        type="email"
        placeholder="Escribe tu correo" 
        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
        maxLength={100}
        required
        value={formValue.email} 
        onChange={onChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control 
        name="password"
        type="password" 
        // pattern="(?=.*?[#?!@$%^&*-\]\[]){8,20}[A-Za-z]"
        placeholder="Password" 
        value={formValue.password}
        onChange={onChange} />
      </Form.Group>

      {/* <Form.Group controlId="formFileLg" className="mb-3" >
        <Form.Label>imagen</Form.Label>
        <Form.Control type="file" size="lg" 
        value={formValue.image} 
        onChange={handleFileChange}/>
      </Form.Group> */}
      <Button variant="primary" type='submit'>
        Submit
      </Button>
    </Form>
        </Card>
    </Container>
  );
}

export default Signin;