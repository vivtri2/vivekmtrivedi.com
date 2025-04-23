// import React from 'react';
// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
// import { Avatar, Card } from 'antd';
// import Project1 from '../asset/projects/realestate.jpg';
// import Project2 from '../asset/projects/workImg.jpeg';

// const { Meta } = Card;

// const Work = () => {
//     return (
//         <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] font-sans'>
//             <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
//                 <div className='pb-8'>
//                     <p className='text-4xl font-bold inline border-b-4 border-[#C23B22] text-gray-300'>Work</p>
//                     <p className='py-6'>Checkout My Work</p>

//                 </div>

//                 <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
//                     <div className='group flex justify-center items-center mx-auto'>

//                         <Card

//                             style={{ width: 300 }}
//                             cover={
//                                 <img
//                                     alt="example"
//                                     src={Project1}
//                                 />
//                             }
//                             actions={[
//                                 <SettingOutlined key="setting" />,
//                                 <EditOutlined key="edit" />,
//                                 <EllipsisOutlined key="ellipsis" />,
//                             ]}
//                         >
//                             <Meta
//                                 avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
//                                 title="Reactjs Application"
//                                 description="This is the Landing Page Created with React JS, Tailwind CSS Authentication with Firebase auth."
//                             />
//                         </Card>



//                     </div>
//                     <div className='group flex justify-center items-center mx-auto'>

//                         <Card
//                             hoverable='true'
//                             style={{ width: 300 }}
//                             cover={
//                                 <img
//                                     alt="example"
//                                     src={Project2}
//                                 />
//                             }
//                             actions={[
//                                 <SettingOutlined key="setting" />,
//                                 <EditOutlined key="edit" />,
//                                 <EllipsisOutlined key="ellipsis" />,
//                             ]}
//                         >
//                             <Meta
//                                 avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
//                                 title="Reactjs Application"
//                                 description="This is the Landing Page Created with React JS, Tailwind CSS Authentication with Firebase auth."
//                             />
                            
//                         </Card>



//                     </div>

//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Work