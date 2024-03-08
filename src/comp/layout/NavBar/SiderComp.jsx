/* eslint-disable react/prop-types */
import { ImCross } from 'react-icons/im';
import Sidebar from '../Sidebar/Sidebar';



const SiderComp= ({ toggleCollapsed, setToggleCollapsed}) => {
	return (
		<>
			<div className="sider-container">
				<div>
					<h2>Sports</h2>
					<div className="sider-cross-icon" onClick={() => setToggleCollapsed(!toggleCollapsed)}>
						<ImCross />
					</div>
				</div>
				<Sidebar />
			</div>
		</>
	);
};

export default SiderComp;
