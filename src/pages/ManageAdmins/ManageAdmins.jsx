import {useEffect, useRef} from 'react'
import Button from '../../components/UI/Button'
import Back from '../../components/UI/Back'
import { Chart, LineController, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { AddCircleOutlineRounded } from '@mui/icons-material'
import Link from '../../components/UI/Link';
import { useNavigate } from 'react-router-dom';

Chart.register(LineController, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const ManageAdmins = () => {
  const chartRef = useRef(null);
  const navigate = useNavigate();

  const navigateAdmin = (admin) => {
    navigate('/profile/a', {state: { admin }})
  }

  const listNames = [
    {
      id: 1,
      name: "Jane Rodriguez",
      timeDate: "08/28/2024 11:23 AM"
    },
    {
      id: 2,
      name: "John Doe",
      timeDate: "08/29/2024 10:15 AM"
    },
    {
      id: 3,
      name: "Emily Smith",
      timeDate: "08/30/2024 02:45 PM"
    },
    {
      id: 4,
      name: "Michael Brown",
      timeDate: "08/31/2024 09:30 AM"
    },
    {
      id: 5,
      name: "Sarah Johnson",
      timeDate: "09/01/2024 04:20 PM"
    }
  ];

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'], // Monthly labels
        datasets: [
          {
            label: 'Admin A',
            data: [10, 20, 15, 30, 25, 20], // Admin A's upload data
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
          },
          {
            label: 'Admin B',
            data: [5, 15, 10, 20, 15, 25], // Admin B's upload data
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
          },
          {
            label: 'Admin C',
            data: [20, 25, 30, 15, 10, 5], // Admin C's upload data
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
          },
          {
            label: 'Admin D',
            data: [12, 18, 22, 24, 30, 28], // Admin D's upload data
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
          },
          {
            label: 'Admin E',
            data: [8, 12, 16, 20, 24, 30], // Admin E's upload data
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Month',
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Uploads',
            },
          },
        },
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `${context.dataset.label}: ${context.parsed.y}`;
              },
            },
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <main>
      <Back to={'/profile/more'}/>
      <h1 className='font-bold desktop:text-xl phone:text-lg'>Manage Admins</h1>
      <section className='flex flex-col gap-3'>
        <p className='font-bold'>Posted per Admin</p>
        <div className="w-full h-64 phone:h-80 desktop:h-80">
          <canvas ref={chartRef}></canvas>
        </div>
      </section>
      <section className='flex flex-col gap-3'>
        <div className='flex phone:flex-col desktop:flex-row desktop:items-center desktop:justify-between'>
          <h3 className='font-bold'>Admins</h3>
          <Link to={'/profile/addAdmin'}>
            <Button variant='grey'>
              <div className='flex item-center gap-2'>
                <AddCircleOutlineRounded />
                <span>Create an Admin</span>
              </div>
            </Button>
          </Link>

        </div>
        
        <div className='flex items-center justify-end'>
          <span className='font-bold'>Last Accessed</span>
        </div>
        <div className='flex flex-col gap-5'>
          {listNames.map((item) => (
            <div key={item.id} onClick={() => navigateAdmin(item)} className='flex hover:bg-grey transition ease-ou p-1 rounded-md cursor-pointer items-center justify-between'>
              <p>{item.name}</p>
              <p>{item.timeDate}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ManageAdmins
