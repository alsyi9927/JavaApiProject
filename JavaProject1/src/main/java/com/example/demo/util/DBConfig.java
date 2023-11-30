package com.example.demo.util;

import javax.sql.DataSource;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

@Configuration
public class DBConfig {

	private String className = "org.mariadb.jdbc.Driver";
    private String url = "jdbc:mariadb://192.168.56.101:3306/ApiProject";
    private String username = "root";
    private String password = "nb123456";
  
	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;
	private JdbcTemplate jdbcTemplate;

	
	public DataSource dataSource() {
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setUsername(username);
		dataSource.setPassword(password);
		dataSource.setUrl(url);
		dataSource.setDriverClassName(className);

		return dataSource;
	}

	
	public NamedParameterJdbcTemplate getNamedParameterJdbc() {

		if (namedParameterJdbcTemplate != null) {
			return namedParameterJdbcTemplate;
		}

		return new NamedParameterJdbcTemplate(dataSource());
	}

	public JdbcTemplate getJdbc() {

		if (jdbcTemplate != null) {
			return jdbcTemplate;
		}

		return new JdbcTemplate(dataSource());
	}

}