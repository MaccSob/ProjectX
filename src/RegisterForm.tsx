

export const FormRegister = () => {
    return (
        <>
        <form action="">
      
        <h3>Create your account!</h3>

        <div className="form_group">

        <label htmlFor="e-mail">E-mail</label>
        <input type="email" placeholder="Enter your e-mail" name="email" id="email" />
            
            </div>
            
            <div className="form_group">

            <label htmlFor="login">Login</label>
        <input type="text" placeholder="Enter your Login" name="login" id="login" />
      
           </div>

            <div className="form_group">

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
          
            </div>

           
            <div className="form_group">
      <label htmlFor="cpassword">Confirm password</label>
        <input type="password" name="cpassword" id="cpassword" />
    
            </div>
        <button type="submit">Create Account</button>

        </form>
        </>

    )

}