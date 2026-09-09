document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    const hasGsap = typeof gsap !== 'undefined';

    const languages = {
        si: {
            short: 'සිං',
            name: 'සිංහල',
            translations: {
                'Foreign Recruitment': 'විදේශ රැකියා',
                'Home': 'මුල් පිටුව',
                'About Us': 'අප ගැන',
                'Gallery': 'ගැලරිය',
                'Contact Us': 'අමතන්න',
                'Apply Now': 'දැන් අයදුම් කරන්න',
                'Official License #3062': 'නිල බලපත්‍ර අංක 3062',
                'Your Gateway to': 'ඔබගේ මාර්ගය',
                'Global Success': 'ගෝලීය සාර්ථකත්වයට',
                "Sri Lanka's most trusted recruitment partner since 2015. We bridge the gap between world-class employers and professional talent.": '2015 සිට ශ්‍රී ලංකාවේ විශ්වාසනීය විදේශ රැකියා සහකරු. ලෝක මට්ටමේ සේවායෝජකයන් සහ දක්ෂ වෘත්තිකයන් අපි සම්බන්ධ කරමු.',
                'Explore Opportunities': 'අවස්ථා බලන්න',
                'Learn More': 'තව දැනගන්න',
                'Placed Candidates': 'රැකියාවට යොමු කළ අය',
                'Years Experience': 'වසර ගණනක අත්දැකීම්',
                'Partner Countries': 'හවුල් රටවල්',
                'Job Satisfaction': 'රැකියා තෘප්තිය',
                'Our': 'අපගේ',
                'Legacy': 'ගමන්මග',
                'Our Legacy': 'අපගේ ගමන්මග',
                'Empowering Dreams': 'සිහින සවිබල ගන්වමින්',
                'Since 2015': '2015 සිට',
                'Our Global Network': 'අපගේ ගෝලීය ජාලය',
                'Countries': 'රටවල්',
                'We Serve': 'අප සේවය කරන',
                'Global Network': 'ගෝලීය ජාලය',
                'We connect top-tier Sri Lankan talent with the most prestigious employers across these leading nations. Explore opportunities worldwide.': 'ශ්‍රී ලංකාවේ දක්ෂ රැකියා අපේක්ෂකයින් ප්‍රමුඛ රටවල විශ්වාසනීය සේවායෝජකයන් සමග අපි සම්බන්ධ කරමු.',
                'View All Supported Countries': 'සියලුම රටවල් බලන්න',
                'Global Opportunities': 'ගෝලීය අවස්ථා',
                'Explore Industries': 'කර්මාන්ත ක්ෂේත්‍ර බලන්න',
                'Discover professional pathways across various sectors with high-demand vacancies in top international destinations.': 'විදේශ රටවල ඉහළ ඉල්ලුමක් ඇති ක්ෂේත්‍ර හරහා ඔබට ගැළපෙන වෘත්තීය මාර්ග සොයා බලන්න.',
                'View All Openings': 'සියලු පුරප්පාඩු බලන්න',
                'Construction & Infrastructure': 'ඉදිකිරීම් සහ යටිතල පහසුකම්',
                'Healthcare & Caregiving': 'සෞඛ්‍ය සේවා සහ රැකවරණය',
                'Hospitality & Tourism': 'හෝටල් සේවා සහ සංචාරක',
                'Technical & Engineering': 'තාක්ෂණික සහ ඉංජිනේරු',
                'Domestic Services': 'ගෘහ සේවා',
                'Logistics & Transport': 'ලොජිස්ටික් සහ ප්‍රවාහන',
                'Masons, Carpenters, Steel Fixers, and Site Supervisors for major Gulf projects.': 'ප්‍රධාන ගල්ෆ් ව්‍යාපෘති සඳහා මැසන්, වඩු කාර්මික, ස්ටීල් ෆික්සර් සහ අඩවි අධීක්ෂක තනතුරු.',
                'Nurses, Caregivers, and Medical Technicians for European & Japanese facilities.': 'යුරෝපා සහ ජපාන ආයතන සඳහා හෙදියන්, රැකවරණ සේවකයන් සහ වෛද්‍ය තාක්ෂණිකයන්.',
                'Chefs, Waiters, Receptionists, and Housekeeping for 5-star international hotels.': 'අන්තර්ජාතික තරු 5 හෝටල් සඳහා සූපවේදීන්, වේටර්, පිළිගැනීමේ නිලධාරීන් සහ හවුස්කීපින්.',
                'Mechanical, Electrical, and Civil Engineers for high-tech industrial sectors.': 'උසස් තාක්ෂණික කර්මාන්ත සඳහා යාන්ත්‍රික, විදුලි සහ සිවිල් ඉංජිනේරුවන්.',
                'Experienced House Maids and Domestic Staff for families across the Middle East.': 'මැදපෙරදිග පවුල් සඳහා අත්දැකීම් ඇති ගෘහ සේවිකාවන් සහ ගෘහ කාර්ය මණ්ඩලය.',
                'Heavy Vehicle Drivers, Warehouse Operators, and Logistics Coordinators.': 'බර වාහන රියදුරන්, ගබඩා ක්‍රියාකරුවන් සහ ලොජිස්ටික් සම්බන්ධීකාරකයන්.',
                'Vacancies': 'පුරප්පාඩු',
                'Quick Links': 'ඉක්මන් සබැඳි',
                'Follow Social Media': 'සමාජ මාධ්‍ය ඔස්සේ එක්වන්න',
                'Contact': 'සම්බන්ධ වන්න',
                'Reach out for your next global opportunity.': 'ඔබගේ ඊළඟ විදේශ රැකියා අවස්ථාව සඳහා අපව අමතන්න.',
                'Contact Now': 'දැන් අමතන්න',
                'All Rights Reserved. License #3062.': 'සියලු හිමිකම් ඇවිරිණි. බලපත්‍ර අංක 3062.',
                'Dedicated to bridging the gap between Sri Lankan talent and global opportunities since 2015.': '2015 සිට ශ්‍රී ලාංකික දක්ෂතාවන් ගෝලීය රැකියා අවස්ථා සමග සම්බන්ධ කිරීමට කැපවෙමු.',
                'Our Vision': 'අපගේ දැක්ම',
                'Our Mission': 'අපගේ මෙහෙවර',
                'The Abhimaan Standard': 'අභිමාන් ප්‍රමිතිය',
                'Our Core Values': 'අපගේ මූලික අගයන්',
                'Integrity & Sincerity': 'අවංකභාවය සහ විශ්වාසය',
                'Professional Competence': 'වෘත්තීය දක්ෂතාව',
                'Candidate Potential': 'අපේක්ෂක හැකියාව',
                'Why Choose Abhimaan?': 'ඇයි Abhimaan තෝරාගන්නේ?',
                'Work With Us': 'අප සමග එක්වන්න',
                'Get In': 'අපව',
                'Touch': 'අමතන්න',
                'Have questions or ready to start your journey? Our team is here to guide you every step of the way.': 'ප්‍රශ්න තියෙනවද? ඔබගේ ගමන ආරම්භ කරන්න සූදානම්ද? අපේ කණ්ඩායම සෑම පියවරකදීම ඔබට සහය වෙයි.',
                'Contact Information': 'සම්බන්ධතා තොරතුරු',
                'Our Office': 'අපගේ කාර්යාලය',
                'Phone Numbers': 'දුරකථන අංක',
                'Email Address': 'ඊමේල් ලිපිනය',
                'Working Hours': 'වැඩ කරන වේලාවන්',
                'Send a Message': 'පණිවිඩයක් යවන්න',
                'Full Name': 'සම්පූර්ණ නම',
                'Phone Number': 'දුරකථන අංකය',
                'Preferred Industry': 'කැමති ක්ෂේත්‍රය',
                'Message': 'පණිවිඩය',
                'Send Message': 'පණිවිඩය යවන්න',
                'Find Us In Kurunegala': 'කුරුණෑගල අපව හමුවන්න',
                'Chat with us for immediate assistance.': 'ඉක්මන් සහය සඳහා අප සමග WhatsApp කරන්න.',
                'Our Gallery': 'අපගේ ගැලරිය',
                'A glimpse into the journeys, offices, and successes of Abhimaan Recruitment.': 'Abhimaan Recruitment හි ගමන්මග, කාර්යාල සහ සාර්ථක කතා වල දසුනක්.',
                'Application Form': 'අයදුම්පත්‍රය',
                'Start Your Global Journey': 'ඔබගේ ගෝලීය ගමන ආරම්භ කරන්න',
                'Fill out the form below and our recruitment specialists will get back to you within 24-48 hours to discuss your opportunities.': 'පහත පෝරමය පුරවන්න. අපගේ රැකියා විශේෂඥයින් පැය 24-48 තුළ ඔබව අමතනු ඇත.',
                'Select Industry': 'ක්ෂේත්‍රය තෝරන්න',
                'Construction': 'ඉදිකිරීම්',
                'Healthcare': 'සෞඛ්‍ය සේවා',
                'Hospitality': 'හෝටල් සේවා',
                'Engineering': 'ඉංජිනේරු',
                'Domestic': 'ගෘහ සේවා',
                'Other': 'වෙනත්',
                'Experience (Years)': 'අත්දැකීම් (වසර)',
                'Upload CV (Optional)': 'CV එක upload කරන්න (අත්‍යවශ්‍ය නොවේ)',
                'Choose PDF/Word file...': 'PDF/Word ගොනුව තෝරන්න...',
                'Submit Application': 'අයදුම්පත යවන්න',
                'By submitting, you agree to our privacy policy.': 'යැවීමෙන් ඔබ අපගේ පෞද්ගලිකත්ව ප්‍රතිපත්තියට එකඟ වේ.',
                'Direct placement in top companies': 'ප්‍රමුඛ සමාගම්වල සෘජු රැකියා යොමු කිරීම',
                'Complete visa & documentation support': 'වීසා සහ ලේඛන සම්පූර්ණ සහය',
                'Pre-departure orientation & training': 'පිටත්වීමට පෙර මඟපෙන්වීම සහ පුහුණුව',
                'Processing...': 'සකසමින්...',
                'Application Received!': 'අයදුම්පත ලැබුණා!',
                'Thank you for applying. Our recruitment team will review your profile and contact you shortly.': 'අයදුම් කළාට ස්තූතියි. අපගේ කණ්ඩායම ඔබගේ තොරතුරු පරීක්ෂා කර ඉක්මනින් අමතනු ඇත.',
                'Close': 'වසන්න',
                'How can we help you?': 'අපට ඔබට කෙසේ උදව් කළ හැකිද?'
            }
        },
        en: {
            short: 'EN',
            name: 'English',
            translations: {}
        },
        ta: {
            short: 'த',
            name: 'தமிழ்',
            translations: {
                'Foreign Recruitment': 'வெளிநாட்டு வேலைவாய்ப்பு',
                'Home': 'முகப்பு',
                'About Us': 'எங்களை பற்றி',
                'Gallery': 'காட்சியகம்',
                'Contact Us': 'தொடர்பு',
                'Apply Now': 'இப்போது விண்ணப்பிக்கவும்',
                'Official License #3062': 'அதிகாரப்பூர்வ உரிமம் #3062',
                'Your Gateway to': 'உங்கள் பாதை',
                'Global Success': 'உலகளாவிய வெற்றிக்காக',
                "Sri Lanka's most trusted recruitment partner since 2015. We bridge the gap between world-class employers and professional talent.": '2015 முதல் இலங்கையின் நம்பகமான வேலைவாய்ப்பு துணை. உலகத் தரமான நிறுவனங்களையும் திறமையான நிபுணர்களையும் இணைக்கிறோம்.',
                'Explore Opportunities': 'வாய்ப்புகளை காண்க',
                'Learn More': 'மேலும் அறிக',
                'Placed Candidates': 'வேலை பெற்றவர்கள்',
                'Years Experience': 'ஆண்டு அனுபவம்',
                'Partner Countries': 'கூட்டு நாடுகள்',
                'Job Satisfaction': 'வேலை திருப்தி',
                'Our': 'எங்கள்',
                'Legacy': 'பயணம்',
                'Our Legacy': 'எங்கள் பயணம்',
                'Empowering Dreams': 'கனவுகளை வலுப்படுத்தி',
                'Since 2015': '2015 முதல்',
                'Our Global Network': 'எங்கள் உலகளாவிய வலைப்பின்னல்',
                'Countries': 'நாடுகள்',
                'We Serve': 'நாங்கள் சேவை செய்கிறோம்',
                'Global Network': 'உலகளாவிய வலைப்பின்னல்',
                'We connect top-tier Sri Lankan talent with the most prestigious employers across these leading nations. Explore opportunities worldwide.': 'இலங்கையின் திறமையான வேட்பாளர்களை முன்னணி நாடுகளின் நம்பகமான நிறுவனங்களுடன் இணைக்கிறோம்.',
                'View All Supported Countries': 'அனைத்து நாடுகளையும் பார்க்க',
                'Global Opportunities': 'உலகளாவிய வாய்ப்புகள்',
                'Explore Industries': 'தொழில் துறைகள்',
                'Discover professional pathways across various sectors with high-demand vacancies in top international destinations.': 'உயர் தேவை உள்ள சர்வதேச இடங்களில் பல துறைகளில் தொழில் பாதைகளை கண்டறியுங்கள்.',
                'View All Openings': 'அனைத்து வேலை வாய்ப்புகள்',
                'Construction & Infrastructure': 'கட்டுமானம் மற்றும் உட்கட்டமைப்பு',
                'Healthcare & Caregiving': 'சுகாதாரம் மற்றும் பராமரிப்பு',
                'Hospitality & Tourism': 'ஹோட்டல் சேவை மற்றும் சுற்றுலா',
                'Technical & Engineering': 'தொழில்நுட்பம் மற்றும் பொறியியல்',
                'Domestic Services': 'வீட்டு சேவைகள்',
                'Logistics & Transport': 'லாஜிஸ்டிக்ஸ் மற்றும் போக்குவரத்து',
                'Masons, Carpenters, Steel Fixers, and Site Supervisors for major Gulf projects.': 'முக்கிய கல்ஃப் திட்டங்களுக்கு மேசன்கள், தச்சர்கள், ஸ்டீல் பிக்சர்கள் மற்றும் தள மேற்பார்வையாளர்கள்.',
                'Nurses, Caregivers, and Medical Technicians for European & Japanese facilities.': 'ஐரோப்பா மற்றும் ஜப்பான் நிறுவனங்களுக்கு செவிலியர்கள், பராமரிப்பாளர்கள் மற்றும் மருத்துவ தொழில்நுட்ப நிபுணர்கள்.',
                'Chefs, Waiters, Receptionists, and Housekeeping for 5-star international hotels.': '5 நட்சத்திர சர்வதேச ஹோட்டல்களுக்கு சமையலர்கள், வேட்டர்கள், வரவேற்பாளர்கள் மற்றும் ஹவுஸ்கீப்பிங்.',
                'Mechanical, Electrical, and Civil Engineers for high-tech industrial sectors.': 'உயர் தொழில்நுட்ப துறைகளுக்கு இயந்திர, மின்சார மற்றும் சிவில் பொறியாளர்கள்.',
                'Experienced House Maids and Domestic Staff for families across the Middle East.': 'மத்திய கிழக்கு குடும்பங்களுக்கு அனுபவமுள்ள வீட்டு பணியாளர்கள்.',
                'Heavy Vehicle Drivers, Warehouse Operators, and Logistics Coordinators.': 'கனரக வாகன ஓட்டுநர்கள், கிடங்கு ஆபரேட்டர்கள் மற்றும் லாஜிஸ்டிக்ஸ் ஒருங்கிணைப்பாளர்கள்.',
                'Vacancies': 'காலியிடங்கள்',
                'Quick Links': 'விரைவு இணைப்புகள்',
                'Follow Social Media': 'சமூக வலைதளங்களில் பின்தொடரவும்',
                'Contact': 'தொடர்பு',
                'Reach out for your next global opportunity.': 'உங்கள் அடுத்த வெளிநாட்டு வாய்ப்பிற்காக எங்களை தொடர்பு கொள்ளுங்கள்.',
                'Contact Now': 'இப்போது தொடர்பு கொள்ளுங்கள்',
                'All Rights Reserved. License #3062.': 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. உரிமம் #3062.',
                'Dedicated to bridging the gap between Sri Lankan talent and global opportunities since 2015.': '2015 முதல் இலங்கை திறமைகளையும் உலகளாவிய வாய்ப்புகளையும் இணைக்க அர்ப்பணிக்கப்பட்டுள்ளோம்.',
                'Our Vision': 'எங்கள் நோக்கம்',
                'Our Mission': 'எங்கள் பணி',
                'The Abhimaan Standard': 'அபிமான் தரம்',
                'Our Core Values': 'எங்கள் முக்கிய மதிப்புகள்',
                'Integrity & Sincerity': 'நேர்மை மற்றும் நம்பிக்கை',
                'Professional Competence': 'தொழில்முறை திறன்',
                'Candidate Potential': 'வேட்பாளர் திறன்',
                'Why Choose Abhimaan?': 'ஏன் Abhimaan தேர்வு?',
                'Work With Us': 'எங்களுடன் சேருங்கள்',
                'Get In': 'எங்களை',
                'Touch': 'தொடர்பு கொள்ளுங்கள்',
                'Have questions or ready to start your journey? Our team is here to guide you every step of the way.': 'கேள்விகள் உள்ளதா? உங்கள் பயணத்தை தொடங்க தயாரா? எங்கள் குழு ஒவ்வொரு படியிலும் உங்களை வழிநடத்தும்.',
                'Contact Information': 'தொடர்பு தகவல்',
                'Our Office': 'எங்கள் அலுவலகம்',
                'Phone Numbers': 'தொலைபேசி எண்கள்',
                'Email Address': 'மின்னஞ்சல் முகவரி',
                'Working Hours': 'வேலை நேரம்',
                'Send a Message': 'செய்தி அனுப்பவும்',
                'Full Name': 'முழு பெயர்',
                'Phone Number': 'தொலைபேசி எண்',
                'Preferred Industry': 'விருப்ப துறை',
                'Message': 'செய்தி',
                'Send Message': 'செய்தி அனுப்பவும்',
                'Find Us In Kurunegala': 'குருநாகலில் எங்களை காண்க',
                'Chat with us for immediate assistance.': 'உடனடி உதவிக்கு WhatsApp மூலம் பேசுங்கள்.',
                'Our Gallery': 'எங்கள் காட்சியகம்',
                'A glimpse into the journeys, offices, and successes of Abhimaan Recruitment.': 'Abhimaan Recruitment இன் பயணங்கள், அலுவலகங்கள் மற்றும் வெற்றிகளின் காட்சி.',
                'Application Form': 'விண்ணப்பப் படிவம்',
                'Start Your Global Journey': 'உங்கள் உலகளாவிய பயணத்தை தொடங்குங்கள்',
                'Fill out the form below and our recruitment specialists will get back to you within 24-48 hours to discuss your opportunities.': 'கீழுள்ள படிவத்தை நிரப்புங்கள். 24-48 மணி நேரத்தில் எங்கள் குழு உங்களை தொடர்பு கொள்ளும்.',
                'Select Industry': 'துறையை தேர்வு செய்யவும்',
                'Construction': 'கட்டுமானம்',
                'Healthcare': 'சுகாதாரம்',
                'Hospitality': 'ஹோட்டல் சேவை',
                'Engineering': 'பொறியியல்',
                'Domestic': 'வீட்டு சேவை',
                'Other': 'மற்றவை',
                'Experience (Years)': 'அனுபவம் (ஆண்டுகள்)',
                'Upload CV (Optional)': 'CV பதிவேற்றவும் (விருப்பம்)',
                'Choose PDF/Word file...': 'PDF/Word கோப்பை தேர்வு செய்யவும்...',
                'Submit Application': 'விண்ணப்பத்தை அனுப்பவும்',
                'By submitting, you agree to our privacy policy.': 'அனுப்புவதன் மூலம் எங்கள் தனியுரிமை கொள்கைக்கு ஒப்புக்கொள்கிறீர்கள்.',
                'Direct placement in top companies': 'முன்னணி நிறுவனங்களில் நேரடி வேலை வாய்ப்பு',
                'Complete visa & documentation support': 'விசா மற்றும் ஆவணங்களுக்கு முழு உதவி',
                'Pre-departure orientation & training': 'புறப்படுவதற்கு முன் வழிகாட்டுதல் மற்றும் பயிற்சி',
                'Processing...': 'செயலாக்கப்படுகிறது...',
                'Application Received!': 'விண்ணப்பம் பெறப்பட்டது!',
                'Thank you for applying. Our recruitment team will review your profile and contact you shortly.': 'விண்ணப்பித்ததற்கு நன்றி. எங்கள் குழு உங்கள் விபரங்களை பரிசீலித்து விரைவில் தொடர்பு கொள்ளும்.',
                'Close': 'மூடு',
                'How can we help you?': 'நாங்கள் எப்படி உதவலாம்?'
            }
        }
    };

    const textNodeKeys = new WeakMap();
    const sourceKeys = new Set(Object.values(languages).flatMap(language => Object.keys(language.translations)));
    const languageOrder = ['si', 'en', 'ta'];
    const normalizeText = (value) => value.replace(/\s+/g, ' ').trim();

    const getCurrentLanguage = () => {
        const savedLanguage = localStorage.getItem('abhimaan-language');
        return languageOrder.includes(savedLanguage) ? savedLanguage : 'si';
    };

    const createLanguageSwitcher = (placement) => {
        const switcher = document.createElement('div');
        switcher.className = `language-switcher language-switcher-${placement}`;
        switcher.innerHTML = `
            <button type="button" class="language-switcher-toggle" aria-label="Change language" aria-expanded="false">
                <span class="language-switcher-current">සිං</span>
                <i data-lucide="chevron-down" class="w-3 h-3"></i>
            </button>
            <div class="language-switcher-panel" role="menu">
                ${languageOrder.map(code => `<button type="button" class="language-option" data-language="${code}" role="menuitem">${languages[code].name}</button>`).join('')}
            </div>
        `;

        const toggle = switcher.querySelector('.language-switcher-toggle');
        if (placement === 'mobile') {
            toggle.addEventListener('click', (event) => {
                event.stopPropagation();
                const currentIndex = languageOrder.indexOf(getCurrentLanguage());
                const nextLanguage = languageOrder[(currentIndex + 1) % languageOrder.length];
                applyLanguage(nextLanguage);
            });
            return switcher;
        }

        toggle.addEventListener('click', (event) => {
            event.stopPropagation();
            document.querySelectorAll('.language-switcher.is-open').forEach(openSwitcher => {
                if (openSwitcher !== switcher) {
                    openSwitcher.classList.remove('is-open');
                    openSwitcher.querySelector('.language-switcher-toggle')?.setAttribute('aria-expanded', 'false');
                }
            });
            const isOpen = switcher.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', String(isOpen));
        });

        switcher.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', (event) => {
                event.stopPropagation();
                applyLanguage(option.dataset.language);
                switcher.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });

        return switcher;
    };

    const setupLanguageSwitchers = () => {
        const desktopNav = document.querySelector('nav .hidden.md\\:flex');
        if (desktopNav && !desktopNav.querySelector('.language-switcher')) {
            const desktopApply = desktopNav.querySelector('[data-apply-trigger], .btn-gold');
            desktopNav.insertBefore(createLanguageSwitcher('desktop'), desktopApply || null);
        }

        const mobileNav = document.querySelector('nav .md\\:hidden');
        if (mobileNav && !mobileNav.querySelector('.language-switcher')) {
            const menuButton = mobileNav.querySelector('#mobile-menu-btn');
            mobileNav.insertBefore(createLanguageSwitcher('mobile'), menuButton || null);
        }

        const mobileMenuFooter = document.querySelector('.mobile-menu-footer');
        if (mobileMenuFooter && !mobileMenuFooter.querySelector('.language-switcher')) {
            mobileMenuFooter.prepend(createLanguageSwitcher('menu'));
        }
    };

    const applyLanguage = (languageCode) => {
        const activeLanguage = languageOrder.includes(languageCode) ? languageCode : 'si';
        localStorage.setItem('abhimaan-language', activeLanguage);
        document.documentElement.lang = activeLanguage === 'si' ? 'si-LK' : activeLanguage === 'ta' ? 'ta-LK' : 'en';
        document.body.dataset.language = activeLanguage;

        const dictionary = languages[activeLanguage].translations;
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
                const parent = node.parentElement;
                if (!parent || parent.closest('script, style, .language-switcher')) return NodeFilter.FILTER_REJECT;
                return NodeFilter.FILTER_ACCEPT;
            }
        });

        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);

        nodes.forEach(node => {
            const currentText = normalizeText(node.nodeValue);
            const sourceKey = textNodeKeys.get(node) || currentText;
            if (!sourceKeys.has(sourceKey)) return;
            textNodeKeys.set(node, sourceKey);

            const leading = node.nodeValue.match(/^\s*/)?.[0] || '';
            const trailing = node.nodeValue.match(/\s*$/)?.[0] || '';
            node.nodeValue = `${leading}${dictionary[sourceKey] || sourceKey}${trailing}`;
        });

        document.querySelectorAll('[placeholder]').forEach(field => {
            const sourcePlaceholder = field.dataset.i18nPlaceholder || normalizeText(field.getAttribute('placeholder') || '');
            if (!sourceKeys.has(sourcePlaceholder)) return;
            field.dataset.i18nPlaceholder = sourcePlaceholder;
            field.setAttribute('placeholder', dictionary[sourcePlaceholder] || sourcePlaceholder);
        });

        document.querySelectorAll('.language-switcher').forEach(switcher => {
            const currentLabel = switcher.querySelector('.language-switcher-current');
            if (currentLabel) currentLabel.textContent = languages[activeLanguage].short;
            switcher.querySelectorAll('.language-option').forEach(option => {
                option.classList.toggle('is-active', option.dataset.language === activeLanguage);
            });
        });

        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }
    };

    setupLanguageSwitchers();
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    document.addEventListener('click', () => {
        document.querySelectorAll('.language-switcher.is-open').forEach(switcher => {
            switcher.classList.remove('is-open');
            switcher.querySelector('.language-switcher-toggle')?.setAttribute('aria-expanded', 'false');
        });
    });
    applyLanguage(getCurrentLanguage());

    // Register ScrollTrigger
    if (hasGsap && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    // Hero Animations
    const heroContent = document.querySelector(".hero-content");
    const nav = document.querySelector("nav");
    if (heroContent && hasGsap) {
        const heroTl = gsap.timeline();
        
        heroTl.fromTo(".hero-content > *", 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" },
            "0"
        );
    }

    // Stats Cards Animation
    if (document.querySelector(".stat-card") && hasGsap) {
        gsap.fromTo(".stat-card", 
            { y: 40, opacity: 0 },
            { 
                scrollTrigger: {
                    trigger: ".stat-card",
                    start: "top 85%",
                },
                y: 0, 
                opacity: 1, 
                duration: 0.8, 
                stagger: 0.1, 
                ease: "back.out(1.7)" 
            }
        );
    }

    // About Section Animation
    if (hasGsap) {
        gsap.from(".about-image", {
            scrollTrigger: {
                trigger: ".about-image",
                start: "top 75%",
            },
            x: -100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        });

        gsap.from(".about-content > *", {
            scrollTrigger: {
                trigger: ".about-content",
                start: "top 75%",
            },
            x: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });
    }

    // Country Cards Animation handled by CSS reveal
    // Category Cards Animation
    if (hasGsap) {
        gsap.from(".category-card", {
            scrollTrigger: {
                trigger: "#vacancies",
                start: "top 85%",
            },
            scale: 0.9,
            opacity: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: "back.out(1.4)"
        });
    }

    // Gallery Items Animation
    if (document.querySelector(".gallery-item") && hasGsap) {
        gsap.from(".gallery-item", {
            scrollTrigger: {
                trigger: ".gallery-item",
                start: "top 90%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out"
        });
    }

    // Footer Contact Details Animation
    if (document.querySelector(".lg\\:col-span-2 .grid") && hasGsap) {
        gsap.from(".lg\\:col-span-2 .grid > *", {
            scrollTrigger: {
                trigger: ".lg\\:col-span-2",
                start: "top 95%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        });
    }

    // Intersection Observer for Reveal Animations
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // We can keep observing if we want to animate multiple times, but usually once is better
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(el => revealObserver.observe(el));
    }

    // Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar Background Change on Scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav div');
        if (window.scrollY > 50) {
            nav.classList.add('shadow-2xl');
            nav.style.backgroundColor = 'rgba(10, 25, 47, 0.9)';
            nav.parentElement.classList.add('py-4');
            nav.parentElement.classList.remove('py-6');
        } else {
            nav.classList.remove('shadow-2xl');
            nav.style.backgroundColor = 'rgba(17, 34, 64, 0.7)';
            nav.parentElement.classList.add('py-6');
            nav.parentElement.classList.remove('py-4');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('is-open');
            mobileMenu.classList.remove('translate-x-full');
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
        });

        const closeMenu = () => {
            mobileMenu.classList.remove('is-open');
            mobileMenu.classList.add('translate-x-full');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = 'auto';
        };

        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', closeMenu);
        }

        // Close on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // Apply Now Modal Logic
    const applyModal = document.getElementById('apply-modal');
    const applyTriggers = document.querySelectorAll('[data-apply-trigger]');
    const closeApplyModal = document.getElementById('close-modal');
    const applicationForm = document.getElementById('application-form');

    const openApplyPage = () => {
        window.location.href = 'index.html?apply=1';
    };

    if (applyTriggers.length > 0) {
        const openModal = () => {
            if (!applyModal) {
                openApplyPage();
                return;
            }

            applyModal.classList.remove('pointer-events-none', 'opacity-0');
            applyModal.querySelector('.modal-content').classList.remove('scale-95', 'opacity-0');
            document.body.style.overflow = 'hidden';
        };

        const closeModal = () => {
            if (!applyModal) return;

            applyModal.classList.add('opacity-0', 'pointer-events-none');
            applyModal.querySelector('.modal-content').classList.add('scale-95', 'opacity-0');
            document.body.style.overflow = 'auto';
        };

        applyTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                openModal();
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('translate-x-full')) {
                    mobileMenu.classList.remove('is-open');
                    mobileMenu.classList.add('translate-x-full');
                }
            });
        });

        if (applyModal && new URLSearchParams(window.location.search).get('apply') === '1') {
            openModal();
        }

        if (closeApplyModal) {
            closeApplyModal.addEventListener('click', closeModal);
        }

        // Close on backdrop click
        if (applyModal) {
            applyModal.querySelector('.modal-backdrop').addEventListener('click', closeModal);
        }

        // Form Submission
        if (applicationForm) {
            applicationForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = applicationForm.querySelector('button[type="submit"]');
                const originalText = btn.innerHTML;
                
                btn.disabled = true;
                btn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Processing...';
                lucide.createIcons();

                setTimeout(() => {
                    applicationForm.innerHTML = `
                        <div class="text-center py-12">
                            <div class="w-20 h-20 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-gold">
                                <i data-lucide="check-circle" class="w-12 h-12"></i>
                            </div>
                            <h3 class="text-3xl font-bold text-white mb-4 font-outfit">Application Received!</h3>
                            <p class="text-gray-400 mb-8">Thank you for applying. Our recruitment team will review your profile and contact you shortly.</p>
                            <button type="button" onclick="window.location.reload()" class="btn-gold px-8 py-3 rounded-xl text-brand-dark font-bold">Close</button>
                        </div>
                    `;
                    applyLanguage(getCurrentLanguage());
                    lucide.createIcons();
                }, 2000);
            });
        }
    }

    // Set Active Nav Link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('text-brand-gold');
            link.classList.remove('hover:text-brand-gold');
        }
    });
});
