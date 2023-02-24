import Topbar from '../../components/topbar/TopBar';
import Feed from '../../components/feed/Feed';
import SideBar from '../../components/sidebar/SideBar';
import RightBar from '../../components/rightbar/RightBar';
import './home.css'
export default function Home() {
  return (
    <>
    <Topbar />
    <div className='homeContainer'>
        <SideBar />
        <Feed />
        <RightBar />
    
    </div>
    </>
  )
}
