import React from 'react'
import MacroCounter from './MacroCounter'

function Sidebar({totCals, totCarbs, totFats, totProtiens, isSidebar, toggleSidebar}) {
  return (
    <div className={`sidebar ${ isSidebar ? 'sidebar_open' : 'sidebar_close'}`}>
        <div className="close" onClick={toggleSidebar}>ABC</div>
        <div>
            
        </div>
    </div>
  )
}

export default Sidebar