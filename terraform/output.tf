output "ec2_public_ip" {
  description = "Public IP address of the EC2 instance"
  value       = aws_instance.swiggy.public_ip
}

output "ec2_public_dns" {
  description = "Public DNS name of the EC2 instance"
  value       = aws_instance.swiggy.public_dns
}

output "swiggy_url" {
  description = "Swiggy application URL"
  value       = "http://${aws_instance.swiggy.public_ip}:3000"
}