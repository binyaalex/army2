const Apps = () => {
	return (
		<div className="shuttle-app"> 
			<div className="title">יוצאים הביתה?</div> 
			<div className="subtitle">הורידו את אפליקציית שאט”ל והרשמו לנסיעה !</div> 
			<a className="button google-play link store" draggable="false" href="https://play.google.com/store/apps/details?id=com.shift.idf&amp;pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"> 
				<img className="icon" alt="Get it on Google Play" src="/images/google-play.f9389271.png"/> 
			</a> 
			<a className="appstore button link store" draggable="false" href="https://apps.apple.com/il/app/%D7%A9%D7%90%D7%98-%D7%9C-%D7%94%D7%99%D7%A1%D7%A2%D7%99%D7%9D-%D7%A6%D7%94-%D7%9C/id1504198076?itsct=apps_box&amp;itscg=30200"> 
				<img className="icon" alt="Get it on App Store" src="/images/ios.fe587be0.svg"/> 
			</a> 
		</div>
	)
}

export default Apps
