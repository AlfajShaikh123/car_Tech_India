import Charts from "../chart"

function DashBoard()
{
    return<>
    <div className="border-2 bg-purple-50 rounded-xl w-full ms-16 ">
        <div className="">
            <img src="src\icons\banner.JPG" className="rounded-xl border-2 mt-2" alt="" />
        </div>
        <div className="ms-20">
        <Charts/>
        </div>
     
    </div>
      
    </>
}
export default DashBoard