import React, { useState } from 'react';
import { Button } from '@material-tailwind/react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart() {


    const dayWiseData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Daily Data',
                data: [12, 19, 3, 5, 2, 3, 7],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    }

    const weekWiseData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Weekly Data',
                data: [65, 59, 80, 81],
                fill: false,
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgba(54, 162, 235, 0.2)',
            },
        ],
    };
    const monthWisedata = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Auguest', "Octomber", "November", "Disember"],
        datasets: [
            {
                label: 'Montly Data',
                data: [100, 200, 300, 400, 500],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    };


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: '',
            },
            title: {
                display: true,
                text: 'Monthly Sales Data',
            },
            datalabels: {
                display: true,
                align: 'top',
                color: 'black',
                font: {
                    weight: 'bold',
                },
            },
            formatter: (value) => value,

        },
    };
    const [chartData, setChartData] = useState(monthWisedata)
    const handleDayWiseClick = () => {
        setChartData(dayWiseData);
    };
    const handleWeekWiseClick = () => {
        setChartData(weekWiseData);
    };
    const handleMonthWiseClick = () => {
        setChartData(monthWisedata);
    };
    return (
        <div className='flex'>
            <div className='p-5 bg-white border-2 border-gray-400 rounded-xl  '>
                <p className='p-5 font-bold text-xl mt-7'>Sales</p>
                <div className='flex mt ms-5  text-center flex-wrap space-y-2'>
                    <div className='border-2 border-gray-300 rounded-xl p-5 w-48'>
                        <img src="https://s7ap1.scene7.com/is/image/tatamotors/FearlessPurple-0?$PO-750-500-S$&fit=crop&fmt=webp-alpha" alt="" className='h-24' />
                        <p>Nexon</p>
                        <hr className='mt-3 bg-black' />
                        <div className='flex space-x-3 justify-center'>
                            <p className='font-bold text-xs mt-2'>40.5K</p>
                            <p className='font-bold text-[10px] mt-[9px] text-green-700'>10.5 %</p>
                        </div>
                    </div>
                    <div className='border-2 border-gray-300 rounded-xl p-5  w-48'>
                        <img src="https://www.pngitem.com/pimgs/m/41-411649_creta-car-png-image-free-download-searchpng-hyundai.png" alt="" className='h-24' />
                        <p>Creata</p>
                        <hr className='mt-3 bg-black' />
                        <div className='flex space-x-3 justify-center'>
                            <p className='font-bold text-xs mt-2'>70.5K</p>
                            <p className='font-bold text-[10px] mt-[9px] text-green-700'>18.5 %</p>
                        </div>
                    </div>
                    <div className='border-2 border-gray-300 rounded-xl p-5  w-48'>
                        <img src="https://ackodrive-assets.s3.amazonaws.com/media/test_4tx0DKf.png" className='h-24' alt="" />
                        <p>Baleno</p>
                        <hr className='mt-3 bg-black' />
                        <div className='flex space-x-3 justify-center'>
                            <p className='font-bold text-xs mt-2'>32.5K</p>
                            <p className='font-bold text-[10px] mt-[9px] text-green-700'>12.8 %</p>
                        </div>

                    </div>
                    <div className='border-2 border-gray-300 rounded-xl p-5  w-48'>
                        <img src="https://www.kindpng.com/picc/m/218-2189811_hyundai-venue-silver-colour-hd-png-download.png" alt="" className='h-24' />
                        <p>Venue</p>
                        <hr className='mt-3 bg-black' />
                        <div className='flex space-x-3 justify-center'>
                            <p className='font-bold text-xs mt-2'>20.5K</p>
                            <p className='font-bold text-[10px] mt-[9px] text-green-700'>5.5 %</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='flex p-5'>

                <div className='bg-white p-5 border-2 border-gray-500 rounded-xl '>
                    <div className='ms-0 flex justify-end'>
                        <Button variant="outlined" onClick={handleWeekWiseClick}>Week</Button>
                        <Button variant="outlined" onClick={handleDayWiseClick}>Day</Button>
                        <Button variant="outlined" onClick={handleMonthWiseClick}>Month</Button>
                    </div>
                    <p className='p-5 font-bold text-xl'>Sales</p>
                    <Bar data={chartData} options={options} className=' h-[400px]' />;
                </div>



            </div>


        </div>)
}

export default BarChart
