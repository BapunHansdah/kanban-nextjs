import Head from 'next/head'
import dynamic from 'next/dynamic'
const SideDrawer = dynamic(() => import("@/components/SideDrawer"), {
  ssr: false,
});
const MainHeader = dynamic(() => import("@/components/MainHeader"), {
  ssr: false,
});
const MainContent = dynamic(() => import("@/components/MainContent"), {
  ssr: false,
});


const Index = (props) => {

  return (
    <div>
       <Head>
          <title>Kanban Project</title>      
      </Head>
      <div className="flex border-r border-r-grey-light-1">
      <div className="md:w-2/12 border-r border-r-grey-light-1">
        <SideDrawer />
      </div>
      <div className="w-full md:w-10/12 border-r border-r-grey-light-1">
        <MainHeader />
        <MainContent />
      </div>
    </div>
    </div>
  )
}

export default Index

