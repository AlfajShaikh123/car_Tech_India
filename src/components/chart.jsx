import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Button } from '@material-tailwind/react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import BarChart from '../barChart';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ChartDataLabels,
    Title,
    Tooltip,
    Legend
);
function Charts() {
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
                position: 'top',
            },
            title: {
                display: true,
                text: 'Your Listing view',
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
    return <>
        <div className='flex '>
            <div className='m-7  p-5 rounded-xl flex'>
                <div className='border-2 p-3 rounded-xl bg-white'>
                    <div className='ms-0 flex justify-end'>
                        <Button variant="outlined" onClick={handleWeekWiseClick}>Week</Button>
                        <Button variant="outlined" onClick={handleDayWiseClick}>Day</Button>
                        <Button variant="outlined" onClick={handleMonthWiseClick}>Month</Button>
                    </div>

                    <Line data={chartData} options={options} className='text-4xl h-[400px]' />
                </div>


                <div className=' border-2 p-3 m-5 mt-24 rounded-xl bg-white w-[230px]' >
                    <p>Sales volume</p>
                    <div className='flex '>
                        <div className='space-y-5 mt-4  '>
                            <div className='flex space-x-3'>
                                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQVyD1n4XjSLTHijRu4Jy92O3E6yvlODS4zA&s" className='h-5 ' alt="" /></div>
                                <p className='text-sm'>Honda</p>
                            </div>

                            <div className='flex space-x-3'>
                                <div><img src="https://static.vecteezy.com/system/resources/thumbnails/020/927/378/small_2x/toyota-brand-logo-car-symbol-with-name-black-design-japan-automobile-illustration-free-vector.jpg" className='h-6 ' alt="" /></div>
                                <p className='text-sm'>Toyota</p>
                            </div>

                            <div className='flex space-x-3'>
                                <div><img src="https://di-uploads-pod5.dealerinspire.com/triplejsaipan/uploads/2018/05/HyundaiLogoStacked_4cblk-1024x659.gif" className='h-5 ' alt="" /></div>
                                <p className='text-sm'>Hyundai </p>
                            </div>


                            <div className='flex space-x-3'>
                                <div><img src="https://logowik.com/content/uploads/images/197_suzuki.jpg" className='h-6 ' alt="" /></div>
                                <p className='text-sm'>suzuki  </p>
                            </div>


                        </div>
                        <div className='p-3 space-y-3 ms-10 font-body text-sm'>
                            <p>82.2K</p>
                            <p>38.4K</p>
                            <p>50.4K</p>
                            <p>10.5K</p>
                            <p>20.5K</p>
                        </div>
                    </div>


                </div>

            </div>

        </div>
        <BarChart />

    </>
}
export default Charts