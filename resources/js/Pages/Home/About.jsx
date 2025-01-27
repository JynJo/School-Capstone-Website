import React from 'react';
import Layout from './Layouts/Layout.jsx'

const About = () => {

  return (<div className="p-5 ">
  <div className="flex ">
    <div className="">
      <nav className="flex flex-col space-y-2 w-[200px] min-h-[100vh]" aria-label="Tabs" role="tablist" aria-orientation="horizontal" style={{ fontFamily: 'Montserrat'}}>
        <button type="button" className="active hs-tab-active:border-pink-500 hs-tab-active:text-pink-600 inline-flex items-center text-md whitespace-nowrap text-gray-500 hover:text-pink-600 focus:outline-none focus:text-pink-600 disabled:opacity-50 disabled:pointer-events-none" id="vertical-tab-with-border-item-1" aria-selected="true" data-hs-tab="#vertical-tab-with-border-1" aria-controls="vertical-tab-with-border-1" role="tab">
          History
        </button>
        <button type="button" className="hs-tab-active:border-pink-500 hs-tab-active:text-pink-600 inline-flex items-center text-md whitespace-nowrap text-gray-500 hover:text-pink-600 focus:outline-none focus:text-pink-600 disabled:opacity-50 disabled:pointer-events-none" id="vertical-tab-with-border-item-2" aria-selected="false" data-hs-tab="#vertical-tab-with-border-2" aria-controls="vertical-tab-with-border-2" role="tab">
          Mission & Vision
        </button>
        <button type="button" className="hs-tab-active:border-pink-500 hs-tab-active:text-pink-600 inline-flex items-center  text-md whitespace-nowrap text-gray-500 hover:text-pink-600 focus:outline-none focus:text-pink-600 disabled:opacity-50 disabled:pointer-events-none" id="vertical-tab-with-border-item-3" aria-selected="false" data-hs-tab="#vertical-tab-with-border-3" aria-controls="vertical-tab-with-border-3" role="tab">
          Core Values
        </button>
      </nav>
    </div>

    <div className="ms-3 flex-grow px-5">
      <div id="vertical-tab-with-border-1" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-1">
          <p className="text-gray-500 mb-4">
              <span className="italic text-pink-800 font-semibold block mb-2 text-center">History</span>
              In 1928, Archbishop James T.G. Hayes, S.J., founded the San Agustin Parochial School for both elementary boys and girls. Soon after its establishment, the school was divided into boys and girls divisions. The latter became Lourdes Academy, managed by the R.V.M. sisters, while the former, today's Xavier University, was run by the Jesuits.
              A decade after, a year following the graduation of the first high school students, it became Lourdes Junior College, at the same time offering Junior Normal and Home Economics courses. The next four years were a period of difficulty for the school, with the brand-new buildings razed by fire on May 2, 1939, and the onset of World War II, hampering normal school operations.
          </p>
          <p className="text-gray-500 mb-4">
              <span className="italic text-pink-800 font-semibold block mb-2 text-center">After World War II</span>
                  In 1947, two years after resuming normal operations, the school became Lourdes College, after offering Teacher Education for the first time. A two-storey building was constructed along Real St. (now called Capistrano St.) in 1952, with a third floor added the year after. Then in 1965, the seven-storey Library and Science Building was constructed. This was Cagayan de Oro's first high-rise structure, as well as becoming one of the city's landmarks.
                  <br/>
                  <br/>
                  In 1970, the Grade School Level was transferred to a three-hectare land in Macasandig, Cagayan de Oro, together with Xavier University Grade School. The two schools were located in a three-storey complex, and the agreement included the sharing of common school facilities.
                  <br/>
                  <br/>
                  Six years later, a self-survey took place at all three school levels, under the leadership of the Directress, Sr. Ma. Lourdes Palacio, RVM, following the guidelines laid out by PAASCU. This was followed by a more intensive self-survey in the school year 1977–78. Then in 1979, the PAASCU formal survey was conducted, which resulted in granting the school a three-year accredited status. In 1980, the school underwent another PAASCU survey; both the Grade School and High School were awarded a five-year accredited status, while the Education and Liberal Arts Programs were granted a seven-year accredited status.
                  <br/>
                  <br/>
                  In the school year 1987–88, the Mother Ignacia Social Concerns Center, Inc. (MISCCI) was created as Lourdes College's community service arm. The same year saw the start of Buhay: Mother Ignacia Development Project, which opened the Mother Ignacia School, funded by MISEREOR (The German Catholic Bishops’ Organization for Development Cooperation). This aimed to educate the youth and their parents living in Lower Dagong, Carmen, Cagayan de Oro. The project was turned over to the community after ten years and is now managed by the Department of Education (DepEd).
                  <br/>
                  <br/>
                  At the same time, the Mother Ignacia Night High School started, set-up to teach daughters of lower income families, as well as those working during the day.
                  <br/>
                  <br/>
                  The Mother Ignacia Housing Project, jointly funded by MISEREOR and Lourdes College, began in 1991. A total of 110 houses were built. Three years later, MISCCI, representing Mindanao, received the National Award for Community Service (NACS) from the Rotary Club of Makati and San Miguel Corporation. The housing project also became one of the entrants of the Asian Regional Consultation for Habitat II in April 1996. It was then nominated as one of the Habitat entries for Asia.
                  <br/>
                  <br/>

                  Since acquiring PAASCU recognition, the school has had several revisits to maintain its accreditation status. One of them, in 1994, granted the Grade School and High School Departments Level II Accreditation status. In February and March 1999, the newly created Basic Education Department underwent another revisit; both the High School and Grade School were granted a further five years of accredited status.
                  <br/>
                  <br/>

                  The college also had another PAASCU revisit in November of the following year for Teacher Education and Liberal Arts, as well as a preliminary visit for Commerce and a separate one for Social Work in the school year after. All of the programs received five years of accredited status, except for Social Work, which was granted three years.
                  <br/>
                  <br/>
                  On August 22–23, 2005, the Teacher Education, Liberal Arts, Commerce and Social Work Programs were awarded Level II Accreditation status for another five years. A preliminary visit for the Hotel and Restaurant Management (HRM) Program was also conducted at the same time.
                  <br/>
                  <br/>
                  Three years later, on May 9, 2008, the Teacher Education, Arts and Sciences and Commerce Programs gained Level III Accreditation status, and on May 25, 2009, the Social Work Program received a further five-year Accreditation status.[2]
          </p>
          <p className="text-gray-500 mb-4">
              <span className="italic text-pink-800 font-semibold block mb-2 text-center">Marinela Neri Velez String Program</span>
                  Marinela Neri Velez, a local philanthropist and music enthusiast, asked the help of Ms. Ana Maria dela Fuente, the Lourdes College music coordinator, with the formation of a music scholarship program. This 10-year program was to be funded by Marinela Neri Velez in partnership with the Manila Symphony Orchestra, with the eventual aim of forming a symphony orchestra for Cagayan de Oro.
                  <br/>
                  <br/>
                  On December 4, 2013, Lourdes College launched the Marinela Neri Velez String Program at the school's auditorium, when they performed alongside the MSO as part of their December Rhapsody concert. Aside from performing regularly with the Lourdes College Chorale, the string ensemble also played at the Limketkai Luxe Hotel on December 21–24, 2015.[3][4]
          </p>

      </div>

      {/* Mission and Vision*/}
      <div id="vertical-tab-with-border-2" className="hidden" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-2">
          <span className="italic text-pink-800 font-semibold block mb-2 text-center">Vision</span>
          <p className='text-gray-500'>
              Witnessing the loving compassion of Jesus and the Ignacian Marian values, we, a nurturing and learning community, actively involved in inner and social transformation.
          </p>
          <span className="italic text-pink-800 font-semibold block mb-2 text-center">Mission</span>
        
          <ol className='text-gray-500'>
            <li>
              Promote a culture of discernment leading to moral integrity with emphasis    on peace, justice, care for life and environment;
            </li>
            <li>
              Pursue constantly innovative programs, approaches, and educational strategies to develop world-class professionals;
            </li>
            <li>
              Form Ignacian Marian leaders who witness to faith, excellence and service in varied socio-cultural settings;
            </li>
            <li>
              Build up more linkages  to develop human and material resources equitably;
            </li>
            <li>
              Intensify our proactive response to issues related to the social concerns of the Church.
            </li>
          </ol>

      </div>


      {/* Core Values*/}
      <div id="vertical-tab-with-border-3" className="hidden" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-3">
        <h2 class='text-center text-2xl mb-4 text-pink-800 uppercase'>Faith Excellence Service</h2>

        <span className="italic text-pink-800 font-semibold block mb-2 text-center">Core Values</span>
          <p className='text-gray-500'>
            Founded in 1928 by the late Archbishop James Hayes, S. J. as San Agustin Parochial School, an elementary school for boys and girls. Five years later, in 1933, the school gave to the community its first twenty (20) graduates and responded to a growing felt need of High School Catholic Education in the city, the school operated with separate principals for the boys and for the girls. The girls division saw the birth of LOURDES ACADEMY which was managed by the Religious of the Virgin Mary (RVM) Sisters.
          </p>
          <span className="italic text-pink-800 font-semibold block mb-2 text-center">Educating and Forming the Lourdesian Way</span>
          <p className='text-gray-500'>
            Our holistic approach starts in the earliest preschool education where faith and academic endeavors are given equal weights in the development and formation of the person. In the classroom, ethical and moral considerations always complement intellectual discourse. We firmly believe in the essence of inculcating a strong spiritual foundation in every learner while sharpening his/her life’s skills. We prepare you for life and expose you to unique challenges that enrich your mind, heart and spirit. We invite you to discover how we challenge you to learn and grow with us; join the hundreds of our proud graduates equipped to make their own distinction as Lourdesians.
          </p>
      </div>
    </div>
  </div>

  </div>
    );
};
About.layout = page => <Layout children={page}/>
export default About;
