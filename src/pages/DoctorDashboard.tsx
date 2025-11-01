import { motion } from 'framer-motion';
import { Calendar, Users, Clock, FileText, QrCode, Search } from 'lucide-react';
import { StatCard } from '@/components/StatCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { mockAppointments } from '@/utils/mockData';

export default function DoctorDashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    { title: 'Today\'s Appointments', value: '12', icon: Calendar, trend: '3 completed', trendUp: true },
    { title: 'Total Patients', value: '156', icon: Users, trend: '+5 this week', trendUp: true },
    { title: 'Pending Reports', value: '8', icon: FileText, trend: '2 urgent', trendUp: false },
    { title: 'Average Wait Time', value: '15min', icon: Clock, trend: '-5min improvement', trendUp: true },
  ];

  const todayAppointments = mockAppointments.filter(apt => apt.status === 'scheduled');

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Doctor Dashboard</h1>
            <p className="text-muted-foreground">Manage your patients and appointments</p>
          </div>
          <Link to="/doctor/scanner">
            <Button className="shadow-glow">
              <QrCode className="mr-2 h-4 w-4" />
              Scan QR Code
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

        {/* Patient Search */}
        <div className="glass rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Quick Patient Search</h3>
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search by Patient ID or Name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Link to="/doctor/patients">
              <Button>Search</Button>
            </Link>
          </div>
        </div>

        {/* Today's Appointments */}
        <div className="glass rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Today's Appointments</h3>
            <Link to="/doctor/appointments">
              <Button variant="ghost" size="sm">View All</Button>
            </Link>
          </div>
          <div className="space-y-4">
            {todayAppointments.length > 0 ? (
              todayAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{appointment.patientName}</p>
                      <p className="text-sm text-muted-foreground">{appointment.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{appointment.time}</p>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-success/10 text-success">
                      Scheduled
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted-foreground py-8">No appointments scheduled for today</p>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <Link to="/doctor/patients" className="glass rounded-xl p-6 hover-lift">
            <Users className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-semibold mb-2">View All Patients</h4>
            <p className="text-sm text-muted-foreground">Access patient records and history</p>
          </Link>
          <Link to="/doctor/scanner" className="glass rounded-xl p-6 hover-lift">
            <QrCode className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-semibold mb-2">QR Code Scanner</h4>
            <p className="text-sm text-muted-foreground">Quick patient lookup via QR</p>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
