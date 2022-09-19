import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div class="desktop">
            <div class="desktop_flex">
                <ul class="foot_logo foot_margin">
                    <li class="logo1"><a href=".#">Logo</a></li>
                    <li class="logo_para"><a href=".#">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</a></li>
                </ul>
                <ul class="work_ul foot_margin">
                    <li class="work_bold"><a href=".#">Work</a></li>
                    <li class="ul_list"><a href=".#">Blog</a></li>
                    <li class="ul_list"><a href=".#">How We Work</a></li>
                    <li class="ul_list"><a href=".#">Testimonials</a></li>
                </ul>
                <ul class="foot_margin">
                    <li class="work_bold"><a href="services.html">Services</a></li>
                    <li class="ul_list"><a href=".#">Marketing Strategy</a></li>
                    <li class="ul_list"><a href=".#">Website Optimization</a></li>
                    <li class="ul_list"><a href=".#">Email Marketing</a></li>
                </ul>
                <ul class="foot_margin">
                    <li class="work_bold"><a href=".#">Business Solution</a></li>
                    <li class="ul_list"><a href=".#">Partnership</a></li>
                    <li class="ul_list"><a href=".#">About Project</a></li>
                    <li class="ul_list"><a href=".#">Corporate</a></li>
                </ul>
                <select name="" id="" class="work_bold select_bg foot_margin">
                    <option value="">Language</option>
                    <option value="">English</option>
                    <option value="">French</option>
                    <option value="">Spanish</option>
                </select>
            </div>
            <hr class="foot_hr" />
            <ul class="last_ul">
                <li class="copy">&copy;DaCode. 2020</li>
                <li><a href=".#">FB</a></li>
                <li><a href=".#">TW</a></li>
                <li><a href=".#">IG</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer