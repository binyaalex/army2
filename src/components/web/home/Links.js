const Links = () => {
	return (
		<div className="links">
			<a href="https://clearance.medical.idf.il" draggable="false" className="button link report-corona"> 
				<div>הצב"ר</div> 
				<img className="icon" src="/images/report-corona.7396b5f9.svg"/> 
			</a> 
			<a href="https:/www.idf.il" draggable="false" className="army button link"> 
				<div>אתר צה"ל</div>
				<img className="icon" src="/images/icon-army.722314f6.svg"/> 
			</a> 
			<a href="https://one.prat.idf.il" draggable="false" className="button link report"> 
				<div>דו"ח 1</div> 
				<img className="icon" src="/images/report-presence.46428415.svg"/> 
			</a> 
		</div>
	)
}

export default Links
