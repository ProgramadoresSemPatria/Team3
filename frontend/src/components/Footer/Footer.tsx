import React from 'react'

const Footer = () => {
  return (
    <footer role='contentinfo' className="w-full bg-white py-4 ">
      {/* perguntar ao time o que colocar aqui */}
          <div className='container mx-auto'>
            <div className='flex flex-col md:flex-row justify-between space-y-4 md:space-y-0'>
              <div>
                <span className='text-gray-800 font-semibold'>Stay connected</span>
                <div>
                  <ul>
                    <li><a target='_blank' rel='noopener noreferrer' href="https://github.com/Diegobbrito" className='text-blue-500 hover:underline'>Diego Brito</a></li>
                    <li><a target='_blank' rel='noopener noreferrer' href="https://github.com/igormooura" className='text-blue-500 hover:underline'>Igor Moura</a></li>
                    <li><a target='_blank' rel='noopener noreferrer' href="https://github.com/FelipeTorresHora" className='text-blue-500 hover:underline'>Felipe Torres</a></li>
                    <li><a target='_blank' rel='noopener noreferrer' href="https://github.com/RamonVeirone" className='text-blue-500 hover:underline'>Ramon Alves</a></li>
                  </ul>
                </div>
              </div>
              <div>
                <span className='text-gray-800 font-semibold'>Links</span>
                <div>
                  <ul>
                    <li><a target='_blank' rel='noopener noreferrer' href="https://github.com/ProgramadoresSemPatria/Team3" className='text-blue-500 hover:underline'>GitHub Repo</a></li>
                  </ul>
                </div>
              </div>
              <div>
                <span className='text-gray-800 font-semibold'>Nossa rede</span>
                <div>
                  <ul>
                    <li><a target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/borderlesscoding/" className='text-blue-500 hover:underline'>Instagram</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='text-center mt-4'>
              <p className='text-gray-600'>&copy; {new Date().getFullYear()} Team3. Todos os direitos reservados</p>
          </div>
    </footer>
  )
}

export default Footer