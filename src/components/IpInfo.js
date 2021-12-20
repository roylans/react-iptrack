import style from '../css/main.module.scss'

export default function IpInfo (data) {
  console.log(data.dataIp)
  return (
    <div className={ style.ipinfo } >
      <div className={ style.ipinfo__col }>
        <div className={ style.ipinfo__label }>IP ADDRESS</div>
        {data.dataIp && 
          <div className={ style.ipinfo__data }>
            {data.dataIp.ip}
          </div>
        }
      </div>
      <div className={ style.ipinfo__col }>
        <div className={ style.ipinfo__label }>LOCATION</div>
        {data.dataIp && 
          <div className={ style.ipinfo__data }>
            {data.dataIp.location.region}, {data.dataIp.location.country}
          </div>
        }
      </div>
      <div className={ style.ipinfo__col }>
        <div className={ style.ipinfo__label }>TIMEZONE</div>
        {data.dataIp && 
          <div className={ style.ipinfo__data }>
            UTC {data.dataIp.location.timezone}
          </div>
        }
      </div>
      <div className={ style.ipinfo__col }>
        <div className={ style.ipinfo__label }>ISP</div>
        {data.dataIp &&
          <div className={ style.ipinfo__data }>
            {data.dataIp.isp}
          </div>
        }
      </div>
    </div>
  )
}