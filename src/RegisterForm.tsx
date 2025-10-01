

export const FormRegister = () => {
    return (
        <>
        <form action="">
      
        <h3>Create your account!</h3>

        <div className="form_group">

        <label htmlFor="e-mail">E-mail</label>
        <input type="email" placeholder="E-mail" name="email" id="email" />
            
            </div>
            
            <div className="form_group">

            <label htmlFor="login">Login</label>
        <input type="text" placeholder="Login" name="login" id="login" />
      
           </div>

            <div className="form_group">

        <label htmlFor="password">Password</label>
        <input type="password"  placeholder="Password" name="password" id="password" />
          
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