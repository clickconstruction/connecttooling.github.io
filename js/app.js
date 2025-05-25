document.addEventListener('DOMContentLoaded', function() {
    // Demo app navigation
    const navButtons = document.querySelectorAll('.nav-button');
    const appInterface = document.getElementById('app-interface');
    
    // Views for the app interface
    const views = {
        chat: `
            <div class="app-header">
                <div class="app-title">Team Chat</div>
                <div class="app-actions">
                    <i class="fas fa-bell"></i>
                    <i class="fas fa-ellipsis-v"></i>
                </div>
            </div>
            <div class="chat-container">
                <div class="chat-sidebar">
                    <div class="channel active">
                        <i class="fas fa-hard-hat"></i>
                        <span>Site Updates</span>
                    </div>
                    <div class="channel">
                        <i class="fas fa-truck"></i>
                        <span>Deliveries</span>
                    </div>
                    <div class="channel">
                        <i class="fas fa-users"></i>
                        <span>Project Team</span>
                    </div>
                    <div class="channel">
                        <i class="fas fa-clipboard-list"></i>
                        <span>Inspections</span>
                    </div>
                </div>
                <div class="chat-messages">
                    <div class="message received">
                        <div class="message-avatar">JD</div>
                        <div class="message-content">
                            <div class="message-sender">John Doe</div>
                            <div class="message-text">Foundation inspection passed! We can proceed with framing tomorrow.</div>
                            <div class="message-time">9:32 AM</div>
                        </div>
                    </div>
                    <div class="message received">
                        <div class="message-avatar">SM</div>
                        <div class="message-content">
                            <div class="message-sender">Sarah Miller</div>
                            <div class="message-text">Great news! I'll make sure the lumber delivery is confirmed for 7am.</div>
                            <div class="message-time">9:45 AM</div>
                        </div>
                    </div>
                    <div class="message sent">
                        <div class="message-content">
                            <div class="message-text">I've updated the schedule in ProjectSync. Can everyone check their assignments?</div>
                            <div class="message-time">10:15 AM</div>
                        </div>
                    </div>
                    <div class="message received">
                        <div class="message-avatar">RJ</div>
                        <div class="message-content">
                            <div class="message-sender">Robert Johnson</div>
                            <div class="message-text">Checking now. Also, I've uploaded new site photos to the Documents section.</div>
                            <div class="message-time">10:18 AM</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chat-input">
                <input type="text" placeholder="Type a message..." disabled>
                <button class="send-button"><i class="fas fa-paper-plane"></i></button>
            </div>
        `,
        documents: `
            <div class="app-header">
                <div class="app-title">Documents</div>
                <div class="app-actions">
                    <i class="fas fa-upload"></i>
                    <i class="fas fa-ellipsis-v"></i>
                </div>
            </div>
            <div style="padding: 1rem; overflow-y: auto; height: 100%;">
                <div style="margin-bottom: 1rem;">
                    <h6 style="font-size: 0.9rem; font-weight: 600; margin-bottom: 0.5rem;">Recent Files</h6>
                    <div style="display: flex; gap: 1rem; overflow-x: auto; padding-bottom: 0.5rem;">
                        <div style="min-width: 120px; text-align: center;">
                            <div style="background-color: #f5f5f5; border-radius: 5px; padding: 0.5rem; margin-bottom: 0.5rem;">
                                <i class="fas fa-file-image" style="font-size: 2rem; color: var(--primary-color);"></i>
                            </div>
                            <div style="font-size: 0.8rem;">Site Photo 1</div>
                        </div>
                        <div style="min-width: 120px; text-align: center;">
                            <div style="background-color: #f5f5f5; border-radius: 5px; padding: 0.5rem; margin-bottom: 0.5rem;">
                                <i class="fas fa-file-pdf" style="font-size: 2rem; color: #dc3545;"></i>
                            </div>
                            <div style="font-size: 0.8rem;">Blueprint v2</div>
                        </div>
                        <div style="min-width: 120px; text-align: center;">
                            <div style="background-color: #f5f5f5; border-radius: 5px; padding: 0.5rem; margin-bottom: 0.5rem;">
                                <i class="fas fa-file-image" style="font-size: 2rem; color: var(--primary-color);"></i>
                            </div>
                            <div style="font-size: 0.8rem;">Inspection Photo</div>
                        </div>
                    </div>
                </div>
                
                <div style="margin-bottom: 1rem;">
                    <h6 style="font-size: 0.9rem; font-weight: 600; margin-bottom: 0.5rem;">Project Documents</h6>
                    <div style="background-color: #f5f5f5; border-radius: 5px; padding: 0.75rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                        <i class="fas fa-file-pdf" style="color: #dc3545;"></i>
                        <div style="font-size: 0.8rem; flex-grow: 1;">Project Specs.pdf</div>
                        <i class="fas fa-download" style="color: var(--gray-color);"></i>
                    </div>
                    <div style="background-color: #f5f5f5; border-radius: 5px; padding: 0.75rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                        <i class="fas fa-file-excel" style="color: #28a745;"></i>
                        <div style="font-size: 0.8rem; flex-grow: 1;">Materials List.xlsx</div>
                        <i class="fas fa-download" style="color: var(--gray-color);"></i>
                    </div>
                    <div style="background-color: #f5f5f5; border-radius: 5px; padding: 0.75rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                        <i class="fas fa-file-word" style="color: #007bff;"></i>
                        <div style="font-size: 0.8rem; flex-grow: 1;">Contract Draft.docx</div>
                        <i class="fas fa-download" style="color: var(--gray-color);"></i>
                    </div>
                </div>
                
                <div>
                    <h6 style="font-size: 0.9rem; font-weight: 600; margin-bottom: 0.5rem;">Shared with Me</h6>
                    <div style="background-color: #f5f5f5; border-radius: 5px; padding: 0.75rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                        <i class="fas fa-file-image" style="color: var(--primary-color);"></i>
                        <div style="font-size: 0.8rem; flex-grow: 1;">Foundation Photos</div>
                        <div style="font-size: 0.7rem; color: var(--gray-color);">Shared by John</div>
                    </div>
                    <div style="background-color: #f5f5f5; border-radius: 5px; padding: 0.75rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                        <i class="fas fa-file-pdf" style="color: #dc3545;"></i>
                        <div style="font-size: 0.8rem; flex-grow: 1;">Inspection Report</div>
                        <div style="font-size: 0.7rem; color: var(--gray-color);">Shared by Sarah</div>
                    </div>
                </div>
            </div>
        `,
        map: `
            <div class="app-header">
                <div class="app-title">Location Tracking</div>
                <div class="app-actions">
                    <i class="fas fa-search"></i>
                    <i class="fas fa-ellipsis-v"></i>
                </div>
            </div>
            <div style="position: relative; height: 100%;">
                <div style="background-color: #e9ecef; height: 100%; position: relative; overflow: hidden;">
                    <!-- Simplified map view -->
                    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-97.7431,30.2672,12,0/300x400?access_token=pk.dummy') center/cover no-repeat;"></div>
                    
                    <!-- Team member locations -->
                    <div style="position: absolute; top: 30%; left: 40%; width: 30px; height: 30px; background-color: var(--primary-color); border-radius: 50%; border: 2px solid white; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.7rem; font-weight: bold;">JD</div>
                    
                    <div style="position: absolute; top: 45%; left: 55%; width: 30px; height: 30px; background-color: var(--primary-color); border-radius: 50%; border: 2px solid white; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.7rem; font-weight: bold;">SM</div>
                    
                    <div style="position: absolute; top: 60%; left: 35%; width: 30px; height: 30px; background-color: var(--secondary-color); border-radius: 50%; border: 2px solid white; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.7rem; font-weight: bold;">YOU</div>
                    
                    <div style="position: absolute; top: 50%; left: 25%; width: 30px; height: 30px; background-color: var(--primary-color); border-radius: 50%; border: 2px solid white; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.7rem; font-weight: bold;">RJ</div>
                    
                    <!-- Delivery truck -->
                    <div style="position: absolute; top: 20%; left: 60%; width: 30px; height: 30px; background-color: #fd7e14; border-radius: 50%; border: 2px solid white; display: flex; align-items: center; justify-content: center; color: white;">
                        <i class="fas fa-truck" style="font-size: 0.8rem;"></i>
                    </div>
                </div>
                
                <!-- Team list -->
                <div style="position: absolute; bottom: 0; left: 0; width: 100%; background-color: white; border-top-left-radius: 15px; border-top-right-radius: 15px; padding: 1rem; max-height: 40%; overflow-y: auto;">
                    <h6 style="font-size: 0.9rem; font-weight: 600; margin-bottom: 0.75rem;">Team Members</h6>
                    
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                        <div style="width: 25px; height: 25px; background-color: var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.7rem; font-weight: bold;">JD</div>
                        <div style="flex-grow: 1; font-size: 0.8rem;">John Doe</div>
                        <div style="font-size: 0.7rem; color: var(--gray-color);">2.1 miles</div>
                    </div>
                    
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                        <div style="width: 25px; height: 25px; background-color: var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.7rem; font-weight: bold;">SM</div>
                        <div style="flex-grow: 1; font-size: 0.8rem;">Sarah Miller</div>
                        <div style="font-size: 0.7rem; color: var(--gray-color);">1.5 miles</div>
                    </div>
                    
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                        <div style="width: 25px; height: 25px; background-color: var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.7rem; font-weight: bold;">RJ</div>
                        <div style="flex-grow: 1; font-size: 0.8rem;">Robert Johnson</div>
                        <div style="font-size: 0.7rem; color: var(--gray-color);">3.2 miles</div>
                    </div>
                    
                    <h6 style="font-size: 0.9rem; font-weight: 600; margin-top: 1rem; margin-bottom: 0.75rem;">Deliveries</h6>
                    
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="width: 25px; height: 25px; background-color: #fd7e14; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white;">
                            <i class="fas fa-truck" style="font-size: 0.8rem;"></i>
                        </div>
                        <div style="flex-grow: 1; font-size: 0.8rem;">Lumber Delivery</div>
                        <div style="font-size: 0.7rem; color: var(--gray-color);">ETA: 20 min</div>
                    </div>
                </div>
            </div>
        `,
        notifications: `
            <div class="app-header">
                <div class="app-title">Notifications</div>
                <div class="app-actions">
                    <i class="fas fa-check-double"></i>
                    <i class="fas fa-ellipsis-v"></i>
                </div>
            </div>
            <div style="padding: 1rem; overflow-y: auto; height: 100%;">
                <div style="margin-bottom: 1.5rem;">
                    <h6 style="font-size: 0.9rem; font-weight: 600; margin-bottom: 0.75rem;">Today</h6>
                    
                    <div style="background-color: rgba(74, 111, 220, 0.1); border-left: 3px solid var(--primary-color); padding: 0.75rem; margin-bottom: 0.75rem; border-radius: 5px;">
                        <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.25rem;">
                            <i class="fas fa-clipboard-check" style="color: var(--primary-color);"></i>
                            <div style="font-size: 0.8rem; font-weight: 600;">Inspection Passed</div>
                        </div>
                        <div style="font-size: 0.8rem; margin-bottom: 0.25rem;">Foundation inspection has been approved.</div>
                        <div style="font-size: 0.7rem; color: var(--gray-color);">9:30 AM</div>
                    </div>
                    
                    <div style="background-color: #f5f5f5; border-left: 3px solid var(--gray-color); padding: 0.75rem; margin-bottom: 0.75rem; border-radius: 5px;">
                        <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.25rem;">
                            <i class="fas fa-truck" style="color: var(--gray-color);"></i>
                            <div style="font-size: 0.8rem; font-weight: 600;">Delivery Scheduled</div>
                        </div>
                        <div style="font-size: 0.8rem; margin-bottom: 0.25rem;">Lumber delivery confirmed for tomorrow at 7:00 AM.</div>
                        <div style="font-size: 0.7rem; color: var(--gray-color);">10:15 AM</div>
                    </div>
                    
                    <div style="background-color: #f5f5f5; border-left: 3px solid var(--gray-color); padding: 0.75rem; margin-bottom: 0.75rem; border-radius: 5px;">
                        <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.25rem;">
                            <i class="fas fa-file-upload" style="color: var(--gray-color);"></i>
                            <div style="font-size: 0.8rem; font-weight: 600;">New Document</div>
                        </div>
                        <div style="font-size: 0.8rem; margin-bottom: 0.25rem;">Robert uploaded new site photos to Documents.</div>
                        <div style="font-size: 0.7rem; color: var(--gray-color);">11:42 AM</div>
                    </div>
                </div>
                
                <div>
                    <h6 style="font-size: 0.9rem; font-weight: 600; margin-bottom: 0.75rem;">Yesterday</h6>
                    
                    <div style="background-color: #f5f5f5; border-left: 3px solid var(--gray-color); padding: 0.75rem; margin-bottom: 0.75rem; border-radius: 5px;">
                        <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.25rem;">
                            <i class="fas fa-calendar-alt" style="color: var(--gray-color);"></i>
                            <div style="font-size: 0.8rem; font-weight: 600;">Schedule Updated</div>
                        </div>
                        <div style="font-size: 0.8rem; margin-bottom: 0.25rem;">Project timeline has been updated in ProjectSync.</div>
                        <div style="font-size: 0.7rem; color: var(--gray-color);">4:15 PM</div>
                    </div>
                    
                    <div style="background-color: #f5f5f5; border-left: 3px solid var(--gray-color); padding: 0.75rem; margin-bottom: 0.75rem; border-radius: 5px;">
                        <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.25rem;">
                            <i class="fas fa-user-plus" style="color: var(--gray-color);"></i>
                            <div style="font-size: 0.8rem; font-weight: 600;">Team Member Added</div>
                        </div>
                        <div style="font-size: 0.8rem; margin-bottom: 0.25rem;">Sarah Miller has been added to the project team.</div>
                        <div style="font-size: 0.7rem; color: var(--gray-color);">2:30 PM</div>
                    </div>
                </div>
            </div>
        `
    };
    
    // Initialize with chat view
    if (appInterface) {
        appInterface.innerHTML = views.chat;
    }
    
    // Handle navigation button clicks
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const view = this.getAttribute('data-view');
            
            // Update active button
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update view
            if (appInterface && views[view]) {
                appInterface.innerHTML = views[view];
            }
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});
