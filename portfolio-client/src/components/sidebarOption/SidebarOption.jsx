import './SidebarOption.css'

function SidebarOption({ Icon, text, active }) {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
      <Icon className="sidebarOption__icon" />
      <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption
