// Matrix background effect
function createMatrixEffect() {
    const matrixBg = document.getElementById('matrixBg');
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()';

    function createMatrixChar() {
        const char = document.createElement('div');
        char.className = 'matrix-char';
        char.textContent = chars[Math.floor(Math.random() * chars.length)];
        char.style.left = Math.random() * 100 + 'vw';
        char.style.animationDuration = (Math.random() * 3 + 2) + 's';
        matrixBg.appendChild(char);

        setTimeout(() => {
            char.remove();
        }, 5000);
    }

    setInterval(createMatrixChar, 100);
}

// Commands data
const commands = {
    help: `
                <p>Available commands:</p>
                <div class="help-commands">
                    <div class="help-item">
                        <span class="help-command">About</span>
                        <span class="help-separator">-</span>
                        <span class="help-description">Learn about me</span>
                    </div>
                    <div class="help-item">
                        <span class="help-command">Projects</span>
                        <span class="help-separator">-</span>
                        <span class="help-description">View my projects</span>
                    </div>
                    <div class="help-item">
                        <span class="help-command">Skills</span>
                        <span class="help-separator">-</span>
                        <span class="help-description">See my technical skills</span>
                    </div>
                    <div class="help-item">
                        <span class="help-command">Experience</span>
                        <span class="help-separator">-</span>
                        <span class="help-description">My work experience</span>
                    </div>
                    <div class="help-item">
                        <span class="help-command">Contact</span>
                        <span class="help-separator">-</span>
                        <span class="help-description">How to reach me</span>
                    </div>
                    <div class="help-item">
                        <span class="help-command">Clear</span>
                        <span class="help-separator">-</span>
                        <span class="help-description">Clear the terminal</span>
                    </div>
                </div>
            `,
    about: `
                <p>👋 About Logendran T</p>
                <br>
                <p>I'm Logendran, an Electronics and Communication Engineering student with a passion for combining data-driven technologies and hardware design.</p>
                <br>
                <p>🔹 Data Engineering - building efficient data pipelines</p>
                <p>🔹 VLSI Design - exploring digital design, ASIC/FPGA.</p>
                <p>🔹 PCB Design & Embedded Systems - designing and developing real-world electronic solutions using EasyEDA, KiCad, and Eagle.</p>
                <br>
                <p>I'm passionate about leveraging technology to solve real-world problems.</p>
            `,
    projects: `
                <p>🚀 Featured Projects:</p>
                <br>
                <div class="projects-grid">
                    <div class="project-card">
                        <div class="project-title">1.Data Cleaning & Transformation Pipeline</div>
                        <p>Built an ETL pipeline to clean and standardize raw CSV datasets using Python and Pandas.</p>
                        <div class="project-tech">Tech: Python, TensorFlow, SQL, Pandas</div>
                    </div>
                    <div class="project-card">
                        <div class="project-title">2.Sensor Design Using the Kicad</div>
                        <p>Design the Electronic Sensor in Kicad Software</p>
                        <div class="project-tech">Tech: Kicad, EasyEDA</div>
                    </div>
                    <div class="project-card">
                        <div class="project-title">3. FB Track</div>
                        <p>Tracking the Fuel Scams in Fuel Supplier or Bunkers for all vehicle</p>
                        <div class="project-tech">Tech: SMT32, Capacitive Sensor, Cloud</div>
                    </div>
                </div>
            `,
    skills: `
                <p>💻 Technical Skills:</p>
                <br>
                <div class="skills-grid">
                    <div class="skill-card">
                        <div class="skill-title">Programming Languages</div>
                        <p>Python</p>
                        <div class="skill-bar"><div class="skill-progress" style="width: 90%"></div></div>
                        <p>JavaScript</p>
                        <div class="skill-bar"><div class="skill-progress" style="width: 80%"></div></div>
                        <p>Java</p>
                        <div class="skill-bar"><div class="skill-progress" style="width: 85%"></div></div>
                        <p>HTML</p>
                        <div class="skill-bar"><div class="skill-progress" style="width: 80%"></div></div>
                        <p>CSS</p>
                        <div class="skill-bar"><div class="skill-progress" style="width: 70%"></div></div>
                    </div>
                    <div class="skill-card">
                        <div class="skill-title">Designing Platform</div>
                        <p>UI/UX - Figma</p>
                        <div class="skill-bar"><div class="skill-progress" style="width: 90%"></div></div>
                        <p>Kicad</p>
                        <div class="skill-bar"><div class="skill-progress" style="width: 88%"></div></div>
                        <p>Canva</p>
                        <div class="skill-bar"><div class="skill-progress" style="width: 90%"></div></div>
                    </div>
                </div>
            `,
    experience: `
                <p>💼 Work Experience:</p>
                <br>
                <div class="project-card">
                    <div class="project-title">Python Developer - CodTech IT Solution Pvt.Ltd(April 2025 - May 2025)</div>
                    <p>• Applied concepts of data processing, file handling, and API integration in project assignments.</p>
                    <p>• Developed mini-projects showcasing clean, efficient, and well-documented code.</p>
                    <p>• Mentor junior developers and conduct code reviews</p>
                </div>
                <br>
                <div class="project-card">
                    <div class="project-title">PCB Designer - SAN TECHNOVATION PVT LTD(Nov 2024 - Dec 2024)</div>
                    <p>• Designed single-layer and double-layer PCBs using EasyEDA, KiCad.</p>
                    <p>• Collaborated with the hardware team to prototype, test, and troubleshoot PCB boardss</p>
                    <p>• Contributed to projects involving embedded systems, IoT modules, and sensor interfacing.</p>
                </div>
            `,
    education: `
                <p>🎓 Educational Background:</p>
                <br>
                <div class="project-card">
                    <div class="project-title">Bachelor of Engineering in Electronics and Communication Engineering</div>
                    <p> [2022 - 2026]
                    <p>Velalar College of Engineering and Technology</p>
                    <p>• Current GPA : 8.8</p>
                    <p>• Specialized in PCB and Data Handling</p>
                </div>
            `,
    certifications: `
                <p>🏆 Certifications:</p>
                <br>
                <div class="project-card">
                    <div class="project-title">Professional Certifications</div>
                    <p>• Data Handler (2025)</p>
                    <p>• PCB Design Using Kicad (2025)</p>
                    <p>• Data Analytics using python (2024)</p>
                    <p>• Cloud Computing (2023)</p>
                    <p>• Streak Performance in Paper presentation (2022)</p>
                </div>
            `,
    leadership: `
                <p>👥 Leadership & Community:</p>
                <br>
                <div class="project-card">
                    <div class="project-title">Community Leadership</div>
                    <p>• IEEE - CS Treasurer</p>
                    <p>• EDC - Student Coordinator</p>
                    <p>• Speaker at IETE Events</p>
                </div>
            `,
    contact: `
                <p>📧 Get In Touch:</p>
                <br>
                <div class="project-card">
                    <div class="project-title">Contact Information</div>
                    <p>📧 Email: logendranthangaraj@gmail.com</p>
                    <p>💼 LinkedIn: linkedin.com/in/logendran18</p>
                    <p>🐙 GitHub: github.com/logendranthangaraj</p>
                    <p>📱 Phone: +91 9843146888</p>
                </div>
                <div class="contact-form">
                    <h3 style="color: #00ff41; margin-bottom: 15px;">Send me a message:</h3>
                    <form id="contactForm">
                        <input type="text" name="name" placeholder="Your Name" required>
                        <input type="email" name="email" placeholder="Your Email" required>
                        <input type="subject" name="subject" placeholder="Subject" required>
                        <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            `,
};

// Terminal functionality
function executeCommand(cmd) {
    const output = document.getElementById('terminalOutput');
    const commandInput = document.getElementById('commandInput');

    // Add the command to output
    const commandBlock = document.createElement('div');
    commandBlock.className = 'command-block';

    if (cmd === 'clear') {
        // Clear all command blocks except welcome and input
        const blocks = output.querySelectorAll('.command-block:not(:first-child)');
        blocks.forEach(block => block.remove());
        commandInput.value = '';
        return;
    }

    commandBlock.innerHTML = `
                <div class="command-line">
                    <span class="prompt">logendran@portfolio:~$</span>
                    <span class="command">${cmd}</span>
                </div>
                <div class="output">
                    ${commands[cmd] || `Command '${cmd}' not found. Type 'help' for available commands.`}
                </div>
            `;

    // Insert before the input area
    const inputArea = output.querySelector('.command-input-area');
    output.insertBefore(commandBlock, inputArea);

    // Clear input and scroll to bottom
    commandInput.value = '';
    output.scrollTop = output.scrollHeight;

    // Handle contact form if present
    if (cmd === 'contact') {
        setTimeout(() => {
            const form = document.getElementById('contactForm');
            if (form) {
                form.addEventListener('submit', handleContactForm);
                form.addEventListener('submit', handleContactForm)
            }
        }, 100);
    }
}

// Contact form handler
function handleContactForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = (formData.get('name') || '').trim()
    const email = (formData.get('email') || '').trim();
    const subject = (formData.get('subject') || '').trim();
    const message = (formData.get('message') || '').trim();
    const templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };
    // Show a small "sending..." state in terminal (optional)
  insertTerminalBlock('logendran@portfolio:~$', 'sending_message', `<p style="color:#ffd966;">Sending message…</p>`);

  // Use EmailJS to send email (make sure service ID / template ID are correct in your EmailJS dashboard)
  emailjs.send("service_9nkzkxg", "template_g3rcjah", templateParams)
    .then((response) => {
      // success — show confirmation in terminal
      const successHtml = `
        <p style="color: #00ff41;"> Your Message sent successfully!</p>
        <p>Thank you ${escapeHtml(name)}, I'll get back to you soon at ${escapeHtml(email)}.</p>
        <p style="color: #888; font-size: 0.9rem;">Your message: "${escapeHtml(message)}"</p>
      `;
      insertTerminalBlock('logendran@portfolio:~$', 'message_sent', successHtml);
      form.reset();
    })
    .catch((err) => {
      // failure — show error in terminal
      const errHtml = `
        <p style="color: #ff6b6b;"> Failed to send message. Please try again later.</p>
        <p style="color: #888; font-size: 0.9rem;">Error: ${escapeHtml(err && err.text ? err.text : (err.message || String(err)))}</p>
      `;
      insertTerminalBlock('logendran@portfolio:~$', 'message_failed', errHtml);
      console.error('EmailJS error:', err);
    });
}

// helper to insert a terminal-style block (keeps code DRY)
function insertTerminalBlock(promptText, commandText, htmlContent) {
  const output = document.getElementById('terminalOutput');
  const commandBlock = document.createElement('div');
  commandBlock.className = 'command-block';
  commandBlock.innerHTML = `
    <div class="command-line">
      <span class="prompt">${promptText}</span>
      <span class="command">${commandText}</span>
    </div>
    <div class="output">
      ${htmlContent}
    </div>
  `;
  const inputArea = output.querySelector('.command-input-area');
  output.insertBefore(commandBlock, inputArea);
  output.scrollTop = output.scrollHeight;
}

// small helper to avoid XSS when injecting user content into terminal (escape minimal)
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

//     // Show success message directly in the terminal
//     const output = document.getElementById('terminalOutput');
//     const commandBlock = document.createElement('div');
//     commandBlock.className = 'command-block';

//     commandBlock.innerHTML = `
//                 <div class="command-line">
//                     <span class="prompt">logendran@portfolio:~$</span>
//                     <span class="command">message_sent</span>
//                 </div>
//                 <div class="output">
//                     <p style="color: #00ff41;"> Your Message sent successfully!</p>
//                     <p>Thank you ${name}, I'll get back to you soon at ${email}.</p>
//                     <p style="color: #888; font-size: 0.9rem;">Your message: "${message}"</p>
//                 </div>
//             `;

//     // Insert before the input area
//     const inputArea = output.querySelector('.command-input-area');
//     output.insertBefore(commandBlock, inputArea);

//     // Scroll to bottom and reset form
//     output.scrollTop = output.scrollHeight;
//     e.target.reset();
// }

// Update timestamp
function updateTimestamp() {
    const now = new Date();
    document.getElementById('timestamp').textContent = now.toLocaleString();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Start matrix effect
    createMatrixEffect();

    // Update timestamp
    updateTimestamp();
    setInterval(updateTimestamp, 1000);

    // Command input handler
    const commandInput = document.getElementById('commandInput');
    commandInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const cmd = this.value.trim().toLowerCase();
            if (cmd) {
                executeCommand(cmd);
            }
        }
    });

    // Navigation click handlers
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const cmd = this.getAttribute('data-command');
            executeCommand(cmd);
        });
    });

    // Focus on input
    commandInput.focus();
});

// EmailJS integration
function sendEmail() {
    const templateParams = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
    };
    emailjs.send("service_9nkzkxg", "template_g3rcjah", templateParams).then(() => alert("Email sentll").catch(() => alert("Email not sentll")));
}