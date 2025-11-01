import { motion } from 'framer-motion';
import { Calendar, FileText, User, Activity } from 'lucide-react';
import { StatCard } from '@/components/StatCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { QRCodeDisplay } from '@/components/QRCodeDisplay';

export default function PatientDashboard() {
  const { user } = useAuth();

  const stats = [
    { title: 'Upcoming Appointments', value: '2', icon: Calendar, trend: 'Next: Tomorrow 10 AM', trendUp: true },
    { title: 'Medical Reports', value: '8', icon: FileText, trend: '1 new this week', trendUp: true },
    { title: 'Active Prescriptions', value: '3', icon: Activity, trend: 'All current', trendUp: true },
  ];

  const upcomingAppointments = [
    { id: 1, doctor: 'Dr. Rekha Sharma', specialty: 'Cardiology', date: 'Tomorrow', time: '10:00 AM' },
    { id: 2, doctor: 'Dr. Arjun Mehta', specialty: 'Neurology', date: 'Jan 25', time: '2:30 PM' },
  ];

  const recentReports = [
    { id: 1, title: 'Blood Test Report', date: 'Jan 15, 2024', type: 'Laboratory' },
    { id: 2, title: 'X-Ray Results', date: 'Jan 10, 2024', type: 'Radiology' },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Patient Dashboard</h1>
            <p className="text-muted-foreground">Your health information at a glance</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Appointments */}
            <div className="glass rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Upcoming Appointments</h3>
                <Link to="/patient/appointments">
                  <Button variant="ghost" size="sm">View All</Button>
                </Link>
              </div>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{appointment.doctor}</p>
                      <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{appointment.date}</p>
                      <p className="text-sm text-muted-foreground">{appointment.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Reports */}
            <div className="glass rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Recent Reports</h3>
                <Link to="/patient/reports">
                  <Button variant="ghost" size="sm">View All</Button>
                </Link>
              </div>
              <div className="space-y-4">
                {recentReports.map((report) => (
                  <div
                    key={report.id}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{report.title}</p>
                        <p className="text-sm text-muted-foreground">{report.type}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{report.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Patient QR Code */}
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-center">Your Patient ID</h3>
              <QRCodeDisplay 
                value={user?.uniqueId || 'PT-1001'} 
                title=""
                size={150}
              />
              <p className="text-xs text-muted-foreground text-center mt-4">
                Show this QR code to healthcare providers for quick access to your records
              </p>
            </div>

            {/* Quick Actions */}
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link to="/patient/profile">
                  <Button variant="outline" className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" />
                    View Profile
                  </Button>
                </Link>
                <Link to="/patient/reports">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    My Reports
                  </Button>
                </Link>
                <Link to="/patient/appointments">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="mr-2 h-4 w-4" />
                    Appointments
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
