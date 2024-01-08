import { MyForm, MyHeader2, MyInput, MyLinearGradient, MyTextArea } from "@/app/styledComponents";

const Contact = () => {

  return (
  <div className="mt-20">
    <MyLinearGradient stroke="lavender" color="white" edgeColor="rgba(0,0,0,0)" margin="20" padding="3" >
      <MyHeader2 text="CONTACT" />

      <MyForm>
    
        <MyInput name="name" width="90%" stroke="lavender" type={'text'} placeholder='Your Name' />
        <MyInput name="email" width="90%" stroke="lavender" type={'email'} placeholder='Your Email' />
        <MyTextArea name="message" width="90%" stroke="lavender" placeholder='Your Message' />
    
        
      </MyForm>
    </MyLinearGradient>
  </div>
  )
}



export default Contact;