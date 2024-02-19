import { MyForm, MyHeader2, MyInput, MyLinearGradient, MyTextArea } from "@/app/styledComponents";
import { Reflection } from '@khanh-devos/react-reflection';

const Contact = () => {

  return (
  <div className="mt-20">
    <div style={{width: 'fit-content', margin: 'auto'}}>
      <Reflection border={true} borderWidth={9} borderShiningColor='skyblue' borderColor="#474F7A" borderRadiusRatio={1.2} borderPathScale={2} light={false} borderRadius="20px">
        <MyLinearGradient stroke="lavender" color="white" 
          edgeColor="rgba(0,0,0,0)" padding="3" >
          <MyHeader2 text="CONTACT" />

          <MyForm>
        
            <MyInput name="name" width="90%" stroke="lavender" type={'text'} placeholder='Your Name' />
            <MyInput name="email" width="90%" stroke="lavender" type={'email'} placeholder='Your Email' />
            <MyTextArea name="message" width="90%" stroke="lavender" placeholder='Your Message' />
        
            
          </MyForm>
        </MyLinearGradient>
      </Reflection>
    </div>
  </div>
  )
}



export default Contact;