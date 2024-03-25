answer = ' '
puts "hello world"

until answer == 'yes'
puts "What is you name?"
name = gets.chomp

puts "I see. so your name is #{name}?: yes or no"
answer = gets.chomp
if answer == "yes"
  puts "Please to meet you, #{name}."
else
  puts "My mistake. I'll ask again."
end
end
