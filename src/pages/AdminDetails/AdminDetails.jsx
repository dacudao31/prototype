import { useEffect, useRef, useState } from 'react';
import Back from '../../components/UI/Back';
import Button from '../../components/UI/Button';
import TextField from '../../components/UI/TextField'
import { useLocation } from 'react-router-dom';
import { Chart, LineController, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';
import Modal from '../../components/UI/Modal'

Chart.register(LineController, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const AdminDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const { admin } = location.state;
  const chartRef = useRef(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const removeAdminHandler = () => {
    alert(`Removed ${admin.name}`)
  }

  const items = [
    {
      id: 1,
      caption: "Pili Nut for Sale",
      time: "08/28/2024 11:23 AM",
      platforms: "Facebook, Instagram"
    },
    {
      id: 2,
      caption: "Malapit na ang sweldo....",
      time: "08/28/2024 11:23 AM",
      platforms: "Facebook, Instagram, TikTok"
    },
    {
      id: 3,
      caption: "Discounted for 50% of...",
      time: "08/28/2024 11:23 AM",
      platforms: "Facebook, Instagram, TikTok"
    },
  ]

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'], // Monthly labels
        datasets: [
          {
            label: `${admin.name}'s Uploads`, // Admin's name in the label
            data: [10, 20, 15, 30, 25, 20], // Example data for the admin's uploads
            borderColor: 'rgba(75, 192, 192, 1)',
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
  }, [admin.name]);

  return (
    <div>
      <Back to={'/profile/admins'} />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className='flex flex-col gap-5'>
          <h1 className='font-bold text-lg'>Are you sure?</h1>
          <p>Are you sure you want to remove {admin.name} as your admin?
          If so, please type '<span>{admin.name}</span>' confirm deletion.</p>
          <TextField />
          <Button onClick={removeAdminHandler} variant='red'>Confirm Removal</Button>
        </div>
      </Modal>
      <section className='mt-5'>
        <h1 className='font-bold text-lg'>{admin.name}</h1>
        <div className='flex w-full items-center gap-4'>
          <div>
            <p className='font-bold'>Last Accessed</p>
            <p>08/28/2024 11:23 AM</p>
          </div>
          <div className='flex-1'>
            <p className='font-bold'>Account Created</p>
            <p>07/03/2024 5:00 PM</p>
          </div>
          <div className='phone:hidden desktop:inline'>
            <Button onClick={openModal} variant='red-outline'>Remove Admin</Button>
          </div>
        </div>
      </section>

      <section className='mt-8'>
        <h2 className='font-bold text-md-lg'>Uploads Overview</h2>
        <div className="w-full h-64 phone:h-80 desktop:h-80">
          <canvas ref={chartRef}></canvas>
        </div>
      </section>

      <section className='flex flex-col gap-5'>
       {items.map((item) => (
         <div key={item.id} className='flex items-center justify-between'>
            <div>
              <p className='font-bold'>{item.caption}</p>
              <p>{item.time}</p>
            </div>
            <div className='phone:w-1/4 '>
              {item.platforms}
            </div>
          </div>
       ))}
      </section>
      <section className='mt-5'>
        <div className='phone:inline desktop:hidden'>
          <Button onClick={openModal} variant='red-outline'>Remove Admin</Button>
        </div>
      </section>
      
    </div>
  )
}

export default AdminDetails;
