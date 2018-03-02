package com.loeo.error.handler;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import com.loeo.common.Result;

/**
 * 功能：
 *
 * @author：LT(286269159@qq.com)
 * @create：2017-06-22 17:43:59
 * @version：2017 Version：1.0
 * @company：创海科技 Created with IntelliJ IDEA
 */
@ControllerAdvice(basePackages = "com.loeo")
public class ErrorHandler {
	private static final Logger logger = LoggerFactory.getLogger(ErrorHandler.class);

	@ExceptionHandler(Exception.class)
	@ResponseBody
	Result handleControllerException(HttpServletRequest request, Throwable ex) {
		HttpStatus status = getStatus(request);
		Map<String, Object> errInfo = new HashMap<>();
		errInfo.put("code", status.value());
		errInfo.put("msg", ex.getMessage());
		logger.error("发生异常", ex);
		return Result.failed("status:" + getStatus(request) +"\n"+ ex.getMessage());
	}

	private HttpStatus getStatus(HttpServletRequest request) {
		Integer statusCode = (Integer) request.getAttribute("javax.servlet.error.status_code");
		if (statusCode == null) {
			return HttpStatus.INTERNAL_SERVER_ERROR;
		}
		return HttpStatus.valueOf(statusCode);
	}
}
