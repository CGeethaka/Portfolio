export default function Portfolio() {
    return (
      <div className="min-h-screen bg-gray-900 text-white font-sans">
  
  
  
  
        {/* Grid: Sidebar + Main */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
  
          {/* Sidebar */}
          <aside className="md:col-span-1 bg-gray-800 rounded-2xl p-6 shadow-lg self-start max-h-[600px] overflow-auto">
            <div className="flex flex-col items-center justify-start mt-8">
            <img
    src="/profile.jpg"
    alt="Charith Geethaka"
    className="w-[140px] h-[140px] rounded-full mb-4 object-cover"
  />
  
              
              <h1 className="text-xl font-bold">Charith Geethaka</h1>
              <p className="text-sm text-gray-400 mb-2">Data | Software | Analytics</p>
              <div className="space-y-2 mt-4 w-full text-center">
                <a href="mailto:cgeethaka96@gmail.com" className="block text-blue-400 hover:underline">📧 cgeethaka96@gmail.com</a>
                <a href="https://www.linkedin.com/in/charith-geethaka" target="_blank" rel="noopener noreferrer" className="block text-blue-400 hover:underline">💼 LinkedIn</a>
                <a href="https://github.com/CGeethaka" target="_blank" rel="noopener noreferrer" className="block text-blue-400 hover:underline">💻 GitHub</a>
                <a href="https://wa.me/94785677063" target="_blank" rel="noopener noreferrer" className="block text-green-400 hover:underline">📱 WhatsApp</a>
                <p className="text-gray-400 text-xs">📍 Dunagaha, Sri Lanka</p>
              </div>
            </div>
          </aside>
  
          {/* Main Content */}
          <main className="md:col-span-2 space-y-6">
  
            {/* About Me */}
            <section className="bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h2 className="text-xl font-semibold mb-2">About Me</h2>
              <p className="text-gray-300">
                I’m Charith Geethaka, a Software Engineering graduate currently pursuing an MSc in Business Analytics. I’m passionate about using data and statistics to solve real-world problems, improve efficiency, and support smarter decision-making.<br/> <br />

                My expertise includes Power BI, Excel (Pivot Tables), SQL, and Python (NumPy, Pandas, SciPy, Seaborn, Matplotlib), combined with a strong foundation in Business Statistics. I enjoy working with data to identify patterns, optimize processes, and deliver insights that add measurable value.
                <br /> <br />
               With a balance of technical knowledge, analytical thinking, and adaptability, I’m committed to contributing in dynamic environments where both data-driven insights and business impact matter.
  
              </p>
            </section>
  
            {/* Skills */}
            <section className="bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Skills & Tools</h2>
  
              <div className="mb-4">
                <h4 className="font-semibold text-gray-400">Languages</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Python", "R", "C#", "Kotlin"].map(skill => (
                    <span key={skill} className="bg-gray-700 px-3 py-1 rounded-full text-sm">{skill}</span>
                  ))}
                </div>
              </div>
  
              <div className="mb-4">
                <h4 className="font-semibold text-gray-400">Big Data</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Hadoop", "HDFS", "MapReduce"].map(tool => (
                    <span key={tool} className="bg-gray-700 px-3 py-1 rounded-full text-sm">{tool}</span>
                  ))}
                </div>
              </div>
  
              <div className="mb-4">
                <h4 className="font-semibold text-gray-400">Data Analysis</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Power BI", "Excel", "NumPy", "pandas", "matplotlib", "SciPy"].map(tool => (
                    <span key={tool} className="bg-gray-700 px-3 py-1 rounded-full text-sm">{tool}</span>
                  ))}
                </div>
              </div>
  
              <div className="mb-4">
                <h4 className="font-semibold text-gray-400">Web</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["HTML", "CSS", "Bootstrap", "React.js"].map(tech => (
                    <span key={tech} className="bg-gray-700 px-3 py-1 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>
  
              <div>
                <h4 className="font-semibold text-gray-400">Concepts</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["OOP", "DSA", "Agile", "SDLC", "PDLC"].map(concept => (
                    <span key={concept} className="bg-gray-700 px-3 py-1 rounded-full text-sm">{concept}</span>
                  ))}
                </div>
              </div>
            </section>
  
          </main>
        </div>
  
        {/* Projects Section (Full Width) */}
        <div className="px-8 pb-8">
          <section className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full">
            <h2 className="text-xl font-semibold mb-4">Projects</h2>
            <div className="space-y-6">
  

                 {/* Airline-Passenger-Satisfaction */}
              <div className="bg-gray-700 p-4 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-white">Airline Passenger Satisfaction Analysis</h3>
                <p className="text-gray-300 mt-1">A data analytics project focused on understanding the factors that drive passenger satisfaction in the airline industry. Using a dataset of 12,981 records, I explored customer demographics, flight details, service ratings, and delays to identify key drivers of satisfaction.</p><br />
                <p className="text-gray-400 text-sm mt-1"><strong>Technologies Used :</strong> Python, Pandas, Matplotlib, Seaborn.<br />
                <strong>Approach :</strong>
                        Performed full exploratory data analysis (EDA), including data cleaning, aggregation, and visualization.
                <strong>Key Insights: :</strong>
                    Found trends in satisfaction based on age, gender, flight distance, customer type (loyal vs. new), and delay factors.
                <strong>Impact</strong>
                    Demonstrated how airlines can use data-driven insights to improve service quality and customer retention.
               
                    
  </p>
                <a href="https://github.com/CGeethaka/Airline-Passenger-Satisfaction" target="_blank" className="text-blue-400 hover:underline mt-2 inline-block">🔗 View on GitHub</a>
              </div>



{/* Power BI Dashboard – U.S. Trade & Tariff Impact Analysis */}
<div className="bg-gray-700 p-4 rounded-xl shadow-md">
  <h3 className="text-lg font-bold text-white">Power BI Dashboard – U.S. Trade & Tariff Impact Analysis</h3>
  <p className="text-gray-300 mt-1">
    Analyzed the economic effects of U.S. tariffs in 2024, focusing on trade deficits, tariff responses, and product-level price impacts. Developed an interactive Power BI dashboard for dynamic insights.
  </p><br />
  <p className="text-gray-400 text-sm mt-1">
    <strong>Technologies Used:</strong> Power BI, DAX, Data Modeling, Visualization.<br />
    <strong>Approach:</strong> Integrated three datasets (country-level trade data, time-series tariff data, product-level price data).<br />
    <strong>DAX Measures:</strong> Net Trade, Deficit per Capita, Tariff Intensity %, Price Increase (%).<br />
    <strong>Visuals Built:</strong> Map charts, KPI cards, area charts, pie charts, and product impact tables with slicers and tooltips.<br />
    <strong>Impact:</strong> Enabled better understanding of tariff effects on trade balance and consumer prices through interactive storytelling.
  </p>
  <a href="https://github.com/CGeethaka/us-trade-tariff-impact-analysis" target="_blank" className="text-blue-400 hover:underline mt-2 inline-block">🔗 View on GitHub</a>
</div>
                
                
                
{/* Excel-Superstore-Analysis */}
<div className="bg-gray-700 p-4 rounded-xl shadow-md">
  <h3 className="text-lg font-bold text-white">Superstore Sales Analysis Dashboard</h3>
  <p className="text-gray-300 mt-1">
    Designed and implemented an interactive Excel dashboard to analyze sales and profitability for a retail Superstore dataset. The dashboard provides managers with quick insights into performance by region, segment, and product categories.
  </p><br />
  <p className="text-gray-400 text-sm mt-1">
    <strong>Technologies Used:</strong> Excel, Pivot Tables, Pivot Charts, Slicers, KPI Metrics.<br />
    <strong>Features:</strong> Monthly sales & profit trends, regional performance comparison, customer segment and product category analysis.<br />
    <strong>Impact:</strong> Enabled stakeholders to track KPIs, identify top-performing regions/customers, and make data-informed decisions for sales strategies.
  </p>
  <a href="https://github.com/CGeethaka/Excel-Superstore-Analysis" target="_blank" className="text-blue-400 hover:underline mt-2 inline-block">🔗 View on GitHub</a>
</div>


                {/* Retail-Economic-Data-Visualization */}
<div className="bg-gray-700 p-4 rounded-xl shadow-md">
  <h3 className="text-lg font-bold text-white">Retail & Economic Data Visualization (Excel)</h3>
  <p className="text-gray-300 mt-1">
    A business analytics project linking retail sales data with economic indicators (CPI and unemployment levels). The dashboards reveal demand patterns, seasonal fluctuations, and macroeconomic effects on sales.
  </p><br />
  <p className="text-gray-400 text-sm mt-1">
    <strong>Technologies Used:</strong> Excel (Pivot Tables, Pivot Charts, Filters, Aggregations, Trendlines).<br />
    <strong>Dataset:</strong> 1,000+ weekly sales records.<br />
    <strong>Analysis Performed:</strong> Store-level sales performance tracking, seasonal demand & volatility detection, correlation between sales, CPI, and unemployment.<br />
    <strong>Impact:</strong> Provided actionable insights for supply chain planning, forecasting, and pricing decisions.
  </p>
  <a href="https://github.com/CGeethaka/Retail-Economic-Data-Visualization" target="_blank" className="text-blue-400 hover:underline mt-2 inline-block">🔗 View on GitHub</a>
</div>
                
                
                
                {/* Project 1 */}
              <div className="bg-gray-700 p-4 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-white">Lab Management System</h3>
                <p className="text-gray-300 mt-1">A full-stack web application designed to streamline the booking and management of laboratories and equipment
                in an educational or research environment. This system provides role-based access for administrators,lab managers, and students,
                allowing them to efficiently manage labs, schedule equipment usage, and track bookings.</p><br />
                <p className="text-gray-400 text-sm mt-1"><strong>Technologies Used :</strong> React.js (frontend), Node.js + Express (backend), MySQL (database)<br />
                <strong>Key Features :</strong>
                        User authentication and role-based access (Admin, Lab Assistant, Student).
  
                        Lab and equipment listings with availability tracking.
  
                        Real-time booking and scheduling system.
  
                        Admin dashboard for managing users, labs, equipment, and bookings.
  
  </p>
                <a href="https://github.com/CGeethaka/lab-Management-System" target="_blank" className="text-blue-400 hover:underline mt-2 inline-block">🔗 View on GitHub</a>
              </div>
  
  
              {/* Project 2 */}
              <div className="bg-gray-700 p-4 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-white">Online Railway management System</h3>
                <p className="text-gray-300 mt-1">Designed and developed a comprehensive system to optimize railway operations and enhance the passenger experience. Conducted
                rigorous performance testing to ensure system scalability and reliability</p><br />
                <p className="text-gray-400 text-sm mt-1">Technologies Used: React.js for frontend, Express.js for backend, and MySQL for database management<br />
                Key Features: Ticket Booking Module, Train Tracking Module, Passenger Management Module, Revenue Management Module</p>
                <a href="https://github.com/CGeethaka/Online-Railway-Management-System" target="_blank" className="text-blue-400 hover:underline mt-2 inline-block">🔗 View on GitHub</a>
              </div>
  
              
  
              {/* Project 3 */}
              <div className="bg-gray-700 p-4 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-white">Agile Adoption in the Crossrail Project - United Kingdom</h3>
                <p className="text-gray-300 mt-1">Analyzed the adoption of Agile methodologies in the Crossrail Project, one of Europe’s largest infrastructure projects. Focused on
                addressing challenges in tunneling, station construction, and integration with existing rail systems</p><br />
                <p className="text-gray-400 text-sm mt-1"><strong>Key Agile Practices Implemented :</strong> Iterative Design and Construction, Collaborative Frameworks, Digital Integration, Risk
                Management.<br /> <strong>Achievements :</strong>  Enhanced collaboration and communication among multi-disciplinary teams, Improved risk mitigation through
                  proactive and adaptive strategies, Demonstrated scalability of Agile practices for large-scale infrastructure projects.<br /> <strong>Lessons Learned :</strong>
                   Tailored Agile practices to align with complex project objectives. Early stakeholder involvement was pivotal for
                  minimizing resistance to Agile workflows. Emphasized flexibility and resilience to address unexpected challenges.
                    </p>
                <a href="https://github.com/CGeethaka/Crossrail-project-in-the-UK" target="_blank" className="text-blue-400 hover:underline mt-2 inline-block">🔗 View on GitHub</a>
              </div>
  
  
  
            </div>
          </section>
        </div>
  
        {/* Experience Section */}
        <div className="px-8 pb-8">
          <section className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full">
            <h2 className="text-xl font-semibold mb-4">Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-white">Lab Assistant - Packages Lanka Pvt Ltd | Ja-Ela,Ekala</h3>
                <p className="text-sm text-gray-400">Dec 2021 – Oct 2024</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 mt-2">
                  <li>Performed routine laboratory testing to ensure product quality and compliance with standard operating procedures</li>
                  <li>Collected, recorded, and organized testing data for various packaging materials with different material combinations.
</li>
                  <li>Monitored product quality, identified anomalies, and communicated findings with detailed reports to relevant teams for corrective
actions.</li>
                  <li>Created Excel-based summaries and dashboards to track testing trends and support decision-making.</li>
                  <li>Occasionally used Minitab for basic statistical analysis and quality data visualization to support process improvement.
</li>

                <li>Collaborated with production and quality teams to ensure data accuracy, streamline workflows, and maintain compliance with
standards.</li>
                
                    
          </ul>
              </div>
            </div>
          </section>
        </div>
  
        
  
        {/* Contact Section */}
        <div className="px-8 pb-8">
          <section className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full">
            <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
            <p className="text-gray-300">Feel free to reach out via email or LinkedIn for collaboration or opportunities!</p>
            <p className="mt-2 text-blue-400">cgeethaka96@gmail.com</p>
            <p className="mt-2 text-blue-400">+94 785677063</p>
          </section>
        </div>
  
      </div>
    );

  }



