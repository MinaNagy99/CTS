import './GoogleMap.css'

export default function GoogleMap() {
  return <>
      <div className="w-100 border-map">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.263843843372!2d31.270025075257916!3d29.943088574974844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145839abe9baf373%3A0xad1cc26abdc1b294!2sCore%20Technology%20Solutions!5e0!3m2!1sen!2seg!4v1701854102227!5m2!1sen!2seg"
                width="100%"
                height="502"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
  </>

}
