function Sigin(){
    return (
        <>
        <div class="w-screen h-screen bg-gray-200 font-sans text-gray-700">
          <div class="w-screen h-screen container mx-auto p-8 flex">
            <div class="max-w-md w-full mx-auto">
              {/* <h1 class="text-4xl text-center mb-12 font-thin">Company</h1> */}
  
              <div class="bg-white rounded-lg overflow-hidden shadow-2xl">
                {/* <h1 class="text-4xl text-center m-4 font-thin">Login</h1> */}
                <div className="flex justify-center mt-4">
                  <button onClick={()=>{redirectToLogin}} className="w-1/3 p-3 mt-4 ml-4 bg-white text-indigo-600 rounded-l-lg shadow-xl">
                    Login{" "}
                  </button>
                  <button onClick={()=>{redirectToSignup}} className="w-1/3 p-3 mt-4 mr-4 bg-indigo-600 text-white rounded-r-lg shadow-xl">
                    Signup{" "}
                  </button>
                </div>
                <div class="p-2">
                  <form onSubmit={handleSubmit} className="m-6 px-8">
                    {/* <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-600">Email</label>
              <div>
              <input type="text" onChange={(e)=>{setUsername(e.target.value)}}/></div>
              </div> */}
                    <div className="mb-5">
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-600"
                      >
                        Email
                      </label>
                      <div>
                        <input
                          className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                          type="mail"
                          onChange={(e) => {
                            setMail(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="mb-5">
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-600"
                      >
                        Password
                      </label>
                      <div>
                        <input
                          className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                          type="password"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </div>
                      <div>
                        <a href="#" class="text-gray-600">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div>
                      <button
                        className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow"
                        type="submit"
                      >
                        Login{" "}
                      </button>
                    </div>
                  </form>
                </div>
  
                <div class="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                  <a href="#" class="font-medium text-indigo-500">
                    Create account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}