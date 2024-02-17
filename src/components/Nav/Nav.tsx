import { Icons } from '../../icons'
import { profile } from '../../assets'

export default function Nav() {
  return (
    <div className='w-[calc(100%-25.5vw)] z-20 px-4 py-7 fixed top-0 left-[26vw] flex bg-white justify-between'>
        <p className='text-2xl text-NGA/Darkest font-semibold'>Reports & Analytics</p>
        <div className='border border-NGA/Light rounded-lg flex px-2 w-48 justify-between items-center  py-2'>
            <div className='w-6 h-6 rounded-full'>
                <img src={profile} className='w-full h-full object-cover rounded-full' alt="" />
            </div>
            <p>Admin_2020</p>
            <Icons.dropDown/>
        </div>
    </div>
  )
}
