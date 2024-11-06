#!/bin/bash

#教程
tutorial(){
	#=====教程开始=====
	#定义变量
	zhang="小张"
	zhao="小赵"
	qian="小钱"
	sun="小孙"
	li="小李"


	echo "Hello World !"

	#1.定义变量
	#变量和等号之间不能有空格
	#变量名只包含字母(大小写敏感),数字,下划线(_)
	#不能使用数字和下划线(_)[强制]开头
	#常量字母大写

	#显式直接赋值
	variable="我是${zhang}"
	echo ${variable}
	#通过语句进行赋值,例如:输出c盘下所有文件夹名称
	# for file in /c/*; do
	#     echo "File: $file"
	# done

	#变量可以被重复赋值;例
	variable="我是${zhao}"
	echo ${variable}

	#1.1使用变量
	#在变量名前加美元符号($),变量名外加花括号[强制]
	#
	#如果不给skill变量加花括号，写成echo "I am good at $skillScript"，解释器就会把$skillScript当成一个变量（其值为空）,无法输出我们想要的结果
	# for skill in Ada Coffe Action Java; do
	# 	echo "I am good at ${skill}Script"
	# done
	#
	#使用变量时应在花括号外添加单引号('')或双引号("")保证变量值为一个整体;
	#如果变量值包含空格或通配符(*)可能会导致执行结果与预期结果不符
	#例:包含空格
	variable="123* 123.txt"
	#不加引号会创建123*和123.txt两个文件
	touch ${variable}
	#加引号会创建'123* 123.txt'这一个文件
	touch "${variable}"
	#例:包含*
	variable="123*"
	#不加引号会输出当前文件夹下所有以123开头的文件
	echo ${variable}
	#加引号会输出当前文件夹下名字叫做'123*'的文件
	echo "${variable}"

	#1.2只读变量
	#使用readonly命令可以将变量定义为只读变量,只读变量的值不能被改变;例
	readonlyName=${zhang}
	#使用readonly命令将变量设置为只读,不需要加$
	readonly readonlyName
	#给只读变量赋值时,会提示not a valid identifier(不是一个有效的标识符)
	#用途:
	# readonlyName=${zhao}
	echo "我是${readonlyName}"

	#1.3删除变量
	#使用unset命令可以删除变量,删除后的变量无法再使用
	#注:unset无法删除readonly修饰的只读变量
	unset variable
	echo "${variable}"

	#1.4变量类型
	#使用单引号('')双引号("")定义字符串
	variable='hello world !'
	echo "${variable}"
	variable="hello world!"
	echo "${variable}"

	#1.5可以使用declare(推荐)或typeset命令的 -i选项 来声明整数变量,这样的变量只包含整数值
	declare -i declareVar=666
	echo "${declareVar}"
	typeset -i typesetVar=666
	echo "${typesetVar}"
	#如果将字符串类型数字赋值给使用declare -i声明的变量时,会自动转换为对应的整数类型数字,可以与数字相加
	declareVar="888"
	declareVar+=2
	echo "${declareVar}"
	#如果没有使用declare -i修饰,则只会将5作为字符串拼接在333后,而不会相加
	declareStrVar="333"
	declareStrVar+=5
	echo "${declareStrVar}"
	#如果给使用declare -i声明的变量赋值数字以外的字符,会提示值不为数字,无法使用,value too great for base(数值太大不能作为算数进制的基)
	# declareVar="777zhang"
	# echo "${declareVar}"

	#1.6数组变量
	#数组允许在一个变量中存储多个值
	#数组可以是整数索引数组或关联数组
	#整数索引数组
	my_array=(1 2 3 4 5)
	echo "${my_array[1]}"

	

	#=====教程结束=====
}




#======d2sj的shell脚本=====
#-----全局变量开始-----
#标题占位符(默认为🌟)
stars="\xF0\x9F\x8C\x9F"
#标题
title="d2sj's shell"


#-----全局变量结束-----
#-----函数开始-----
#待完成函数
todoFunction(){
	echo ""
}

# 判断当前机器是否支持UTF-8,并设置占位符
isUTF-8(){
	#判断locale输出的字符集中是否不包含UTF-8
	if [[ $(locale) != *"UTF-8"* ]]; then
		#如果系统不支持UTF-8,使用*
		stars="*"
	fi
	#设置标题及🌟占位符
	for i in {1..10}; do
		# 使用发光星星的十六进制UTF-8编码
		echo -en "${stars}"
		if [ "$i" -eq 5 ]; then
			echo -n "  ${title}  "
		fi
	done
	#换行
	echo
}

#初始化函数
init(){
	#设置占位符
	isUTF-8
}

#-----函数结束-----

#-----业务开始-----
init
echo "请输入想要执行的选项:"

tutorial
#-----业务结束-----









